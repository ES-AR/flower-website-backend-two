const Flower = require('../model/flowerModel');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Get all flowers
const getFlowers = async (req, res) => {
    try {
        const flowers = await Flower.find({}).sort({ createdAt: -1 });
        res.status(200).json(flowers);
    } catch (error) {
        console.error("Error fetching flowers:", error);
        res.status(500).json({ error: 'Server error fetching flowers' });
    }
};

// Get a single flower by ID
const getFlower = async (req, res) => {
    const { id } = req.params;
    try {
        const flower = await Flower.findById(id);
        if (!flower) {
            return res.status(404).json({ error: 'No such flower' });
        }
        res.status(200).json(flower);
    } catch (error) {
        console.error("Error fetching flower:", error);
        res.status(500).json({ error: 'Server error fetching flower' });
    }
};

// Create a new flower with image upload
const createFlower = async (req, res) => {
    console.log("Request body:", req.body);
    console.log("Uploaded file:", req.file);

    const { Title, Description, Price, Category } = req.body;
    const Image = req.file ? `/uploads/${req.file.filename}` : null;

    try {
        if (!Image) {
            return res.status(400).json({ error: "Image is required" });
        }

        const flower = await Flower.create({
            Title,
            Description,
            Price: Number(Price),  // ✅ ensure numeric
            Image,
            Category
        });

        res.status(201).json(flower);
    } catch (error) {
        console.error("Error creating flower:", error.message);
        res.status(400).json({ error: error.message });
    }
};

// Delete a flower
const deleteFlower = async (req, res) => {
    const { id } = req.params;

    try {
        const flower = await Flower.findById(id);
        if (!flower) {
            return res.status(404).json({ error: 'Flower not found' });
        }

        // Delete image if exists
        if (flower.Image) {
            const imagePath = path.join(__dirname, '../', flower.Image);
            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.error('Error deleting image:', err);
                } else {
                    console.log('Image deleted:', imagePath);
                }
            });
        }

        await Flower.findByIdAndDelete(id);
        res.status(200).json({ message: 'Flower deleted successfully' });

    } catch (error) {
        console.error("Error deleting flower:", error);
        res.status(500).json({ error: 'Server error deleting flower' });
    }
};

// Update a flower
const updateFlower = async (req, res) => {
    const { id } = req.params;
    const { Title, Description, Price, Category } = req.body;
    let newImagePath = null;

    try {
        const flower = await Flower.findById(id);
        if (!flower) {
            return res.status(404).json({ error: 'Flower not found' });
        }

        // Replace image if new one is uploaded
        if (req.file) {
            newImagePath = `/uploads/${req.file.filename}`;

            if (flower.Image) {
                const oldImagePath = path.join(__dirname, '../', flower.Image);
                fs.unlink(oldImagePath, (err) => {
                    if (err) {
                        console.error('Error deleting old image:', err);
                    } else {
                        console.log('Old image deleted:', oldImagePath);
                    }
                });
            }
        }

        const updatedFlower = await Flower.findByIdAndUpdate(
            id,
            {
                Title: Title || flower.Title,
                Description: Description || flower.Description,
                Price: Price ? Number(Price) : flower.Price, // ✅ ensure numeric
                Category: Category || flower.Category,
                Image: newImagePath || flower.Image
            },
            { new: true }
        );

        res.status(200).json(updatedFlower);

    } catch (error) {
        console.error("Error updating flower:", error);
        res.status(500).json({ error: 'Server error updating flower' });
    }
};

module.exports = {
    getFlowers,
    getFlower,
    createFlower,
    deleteFlower,
    updateFlower,
    upload
};
