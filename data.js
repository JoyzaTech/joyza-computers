let NavCollections = {
    Computers,
    Software,
    Accessories
}

let Computers = {
    item1: {
        name: "UltraPro X15 Laptop",
        images: ["ultrapro_x15.jpg"],
        price: 1399.99,
        description: "High-performance laptop with an ultra-thin design, perfect for gaming and professional use.",
        features: [
            "15.6\" 4K UHD Display",
            "Intel Core i7 13th Gen",
            "16GB DDR5 RAM",
            "1TB NVMe SSD",
            "NVIDIA RTX 4060 GPU"
        ],
        specifications: {
            processor: "Intel Core i7-13700H",
            ram: "16GB DDR5",
            storage: "1TB NVMe SSD",
            graphics: "NVIDIA RTX 4060 8GB",
            os: "Windows 11 Pro"
        },
        mainProduct: true
    },
    item2: {
        name: "CompactAir Chromebook",
        images: ["compactair.jpg"],
        price: 349.99,
        description: "Lightweight and budget-friendly Chromebook ideal for students and casual browsing.",
        features: [
            "11.6\" HD Display",
            "Intel Celeron N4020",
            "4GB RAM",
            "64GB eMMC Storage",
            "Chrome OS"
        ],
        specifications: {
            processor: "Intel Celeron N4020",
            ram: "4GB DDR4",
            storage: "64GB eMMC",
            graphics: "Integrated Intel UHD",
            os: "Chrome OS"
        },
        mainProduct: false
    },
    item3: {
        name: "PowerTower Z7 Desktop",
        images: ["powertower_z7.jpg"],
        price: 1199.99,
        description: "Custom-built desktop designed for creative professionals and gamers.",
        features: [
            "Intel Core i9 Processor",
            "32GB DDR5 RAM",
            "2TB SSD + 2TB HDD",
            "NVIDIA RTX 4070",
            "Liquid Cooling System"
        ],
        specifications: {
            processor: "Intel Core i9-13900K",
            ram: "32GB DDR5",
            storage: "2TB SSD + 2TB HDD",
            graphics: "NVIDIA RTX 4070 12GB",
            os: "Windows 11 Pro"
        },
        mainProduct: true
    }
}

let Software = {
    item1: {
        name: "PhotoMaster Pro",
        images: ["photomaster_pro.jpg"],
        price: 89.99,
        description: "Advanced photo editing software with AI-powered tools.",
        features: [
            "AI Auto Enhancement",
            "Layer-based Editing",
            "RAW Support",
            "Cloud Integration",
            "Preset Filters"
        ],
        specifications: {
            platform: "Windows, macOS",
            license: "Single-user",
            fileSize: "1.2GB",
            version: "2025.2",
            supportedFormats: "JPEG, PNG, RAW, PSD"
        },
        mainProduct: true
    },
    item2: {
        name: "SecureGuard Antivirus",
        images: ["secureguard.jpg"],
        price: 49.99,
        description: "Comprehensive antivirus and online protection suite.",
        features: [
            "Real-time Threat Detection",
            "Firewall Protection",
            "Ransomware Shield",
            "Email Scanning",
            "Scheduled Scans"
        ],
        specifications: {
            platform: "Windows, macOS",
            license: "1 Year / 3 Devices",
            fileSize: "450MB",
            version: "10.6",
            updates: "Automatic"
        },
        mainProduct: false
    },
    item3: {
        name: "CodeSmith IDE",
        images: ["codesmith_ide.jpg"],
        price: 129.99,
        description: "Modern IDE for full-stack development with smart code assistance.",
        features: [
            "Multi-language Support",
            "Live Preview",
            "Integrated Debugger",
            "Version Control Integration",
            "Extensions Marketplace"
        ],
        specifications: {
            platform: "Windows, macOS, Linux",
            license: "Perpetual",
            fileSize: "800MB",
            version: "3.4.1",
            languagesSupported: "JavaScript, Python, C++, Java, Go"
        },
        mainProduct: true
    }
}

let Accessories = {
    item1: {
        name: "ProSound Wireless Headset",
        images: ["prosound_headset.jpg"],
        price: 99.99,
        description: "Noise-cancelling wireless headset with crystal clear audio and long battery life.",
        features: [
            "Bluetooth 5.2",
            "Active Noise Cancellation",
            "40-Hour Battery Life",
            "Built-in Microphone",
            "Foldable Design"
        ],
        specifications: {
            connectivity: "Bluetooth",
            batteryLife: "40 hours",
            weight: "250g",
            color: "Black",
            charging: "USB-C"
        },
        mainProduct: true
    },
    item2: {
        name: "ErgoLift Laptop Stand",
        images: ["ergolift_stand.jpg"],
        price: 39.99,
        description: "Aluminum laptop stand for improved ergonomics and cooling.",
        features: [
            "Adjustable Height",
            "Aluminum Build",
            "Anti-Slip Pads",
            "Portable Foldable Design",
            "Ventilation Openings"
        ],
        specifications: {
            material: "Aluminum Alloy",
            weightCapacity: "10kg",
            compatibility: "11\" to 17\" Laptops",
            weight: "1.1kg",
            dimensions: "28 x 24 x 5 cm"
        },
        mainProduct: false
    },
    item3: {
        name: "HyperClick RGB Mouse",
        images: ["hyperclick_mouse.jpg"],
        price: 59.99,
        description: "Ergonomic gaming mouse with customizable RGB lighting and precision tracking.",
        features: [
            "16,000 DPI Sensor",
            "RGB Lighting",
            "7 Programmable Buttons",
            "Ergonomic Design",
            "Braided Cable"
        ],
        specifications: {
            dpi: "16,000",
            buttons: 7,
            connectivity: "USB",
            lighting: "Custom RGB",
            compatibility: "Windows, macOS"
        },
        mainProduct: false
    }
}
