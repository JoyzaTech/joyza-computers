export let navCollections = [
    'computers',
    'software',
    'accessories'
]

export let computers = {
    item1: {
        name: "Dell XPS 15 (9530)",
        images: [
            "https://res.cloudinary.com/dom4vyzw7/image/upload/v1747860512/download_wk0oga_e_background_removal_f_png_edqabp.png"
        ],
        price: 1899.99,
        description: "Premium 15-inch laptop with a stunning OLED display, ideal for creators and professionals.",
        features: [
            "15.6\" 3.5K OLED Touch Display",
            "Intel Core i7-13700H",
            "16GB DDR5 RAM",
            "512GB NVMe SSD",
            "NVIDIA RTX 4050 GPU"
        ],
        specifications: {
            processor: "Intel Core i7-13700H",
            ram: "16GB DDR5",
            storage: "512GB NVMe SSD",
            graphics: "NVIDIA GeForce RTX 4050 6GB",
            os: "Windows 11 Home"
        },
        mainProduct: true
    },
    item2: {
        name: "Acer Chromebook Spin 311",
        images: [
            "https://res.cloudinary.com/dom4vyzw7/image/upload/v1747860589/download_bec3rw_e_background_removal_f_png_tjfchb.png"
        ],
        price: 239.99,
        description: "Compact and convertible Chromebook, perfect for students and on-the-go use.",
        features: [
            "11.6\" HD Touchscreen Display",
            "MediaTek MT8183C",
            "4GB LPDDR4X RAM",
            "64GB eMMC Storage",
            "Chrome OS"
        ],
        specifications: {
            processor: "MediaTek MT8183C Octa-Core",
            ram: "4GB LPDDR4X",
            storage: "64GB eMMC",
            graphics: "ARM Mali-G72 MP3",
            os: "Chrome OS"
        },
        mainProduct: false
    },
    item3: {
        name: "CyberPowerPC Gamer Xtreme VR Gaming PC",
        images: [
            "https://res.cloudinary.com/dom4vyzw7/image/upload/v1747860637/71DvG2FjM_L_jhrk24_e_background_removal_f_png_anjcjy.png"
        ],
        price: 1249.99,
        description: "High-performance desktop for gaming and demanding tasks with modern hardware.",
        features: [
            "Intel Core i7-13700F",
            "16GB DDR4 RAM",
            "1TB NVMe SSD",
            "NVIDIA GeForce RTX 4060",
            "RGB Case with Tempered Glass"
        ],
        specifications: {
            processor: "Intel Core i7-13700F",
            ram: "16GB DDR4",
            storage: "1TB NVMe SSD",
            graphics: "NVIDIA GeForce RTX 4060 8GB",
            os: "Windows 11 Home"
        },
        mainProduct: true
    }
}


export let software = {
    item1: {
        name: "Adobe Photoshop",
        images: [
            "https://res.cloudinary.com/dom4vyzw7/image/upload/v1747861316/adobe-photoshop_2019_photoshop-logo_b0uhvl_e_background_removal_f_png_eftxaf.png"
        ],
        price: 89.99, // Approximate monthly/yearly cost breakdown
        description: "Industry-leading software for photo editing and graphic design.",
        features: [
            "AI-Powered Editing with Adobe Sensei",
            "Layer-Based Workflow",
            "RAW and PSD Support",
            "Cloud Documents and Libraries",
            "Extensive Plugin Support"
        ],
        specifications: {
            platform: "Windows, macOS",
            license: "Subscription (Single App)",
            fileSize: "2.5GB",
            version: "2025 (Creative Cloud)",
            supportedFormats: "PSD, JPEG, PNG, TIFF, RAW, GIF"
        },
        mainProduct: true
    },
    item2: {
        name: "Norton 360 Deluxe",
        images: [
            "https://res.cloudinary.com/dom4vyzw7/image/upload/v1747861378/14-Norton_580x_mxuek8.webp"
        ],
        price: 49.99,
        description: "Advanced antivirus and identity protection for multiple devices.",
        features: [
            "Real-Time Threat Protection",
            "Secure VPN",
            "Dark Web Monitoring",
            "Cloud Backup (50GB)",
            "Password Manager"
        ],
        specifications: {
            platform: "Windows, macOS, Android, iOS",
            license: "1 Year / 5 Devices",
            fileSize: "300MB",
            version: "2025 Edition",
            updates: "Automatic"
        },
        mainProduct: false
    },
    item3: {
        name: "JetBrains IntelliJ IDEA Ultimate",
        images: [
            "https://res.cloudinary.com/dom4vyzw7/image/upload/v1747861423/com.jetbrains.IntelliJ-IDEA-Ultimate_tfanbt.png"
        ],
        price: 129.99,
        description: "Powerful IDE for Java, Kotlin, and modern full-stack development.",
        features: [
            "Smart Code Completion",
            "Built-in Debugger and Test Runner",
            "Version Control Integration",
            "Database Tools",
            "Supports Many Frameworks (Spring, React, etc.)"
        ],
        specifications: {
            platform: "Windows, macOS, Linux",
            license: "Commercial (Annual)",
            fileSize: "1.5GB",
            version: "2024.1",
            languagesSupported: "Java, Kotlin, JavaScript, Python, SQL, HTML, more"
        },
        mainProduct: false
    }
}


export let accessories = {
    item1: {
        name: "Sony WH-1000XM5 Wireless Headphones",
        images: [
            "https://res.cloudinary.com/dom4vyzw7/image/upload/v1747861848/Sony-WH-1000XM5-Bluetooth-Wireless-Noise-Canceling-Headphones-Blue_b23a8559-98bc-495f-8920-5aa301f10712.5e65f2df8c845cc47e1a20fdca2b41cd_cmghy2_e_background_removal_f_png.webp_awqzjj.png"
        ],
        price: 99.99, // NOTE: Actual MSRP is ~$349.99, price here is reduced for example use
        description: "Industry-leading noise canceling wireless headphones with premium sound and all-day comfort.",
        features: [
            "Bluetooth 5.2",
            "Industry-Leading Noise Cancellation",
            "30-Hour Battery Life",
            "Built-in Mic with Clear Voice Pickup",
            "Fold-Flat Design"
        ],
        specifications: {
            connectivity: "Bluetooth",
            batteryLife: "30 hours",
            weight: "250g",
            color: "Black",
            charging: "USB-C Fast Charging"
        },
        mainProduct: true
    },
    item2: {
        name: "Nulaxy C3 Laptop Stand",
        images: [
            "https://res.cloudinary.com/dom4vyzw7/image/upload/v1747861915/71xlXzGX9aL_a9zhhy_e_background_removal_f_png_o9fzoh.png"
        ],
        price: 39.99,
        description: "Durable and ergonomic aluminum laptop stand that improves posture and device airflow.",
        features: [
            "Adjustable Height",
            "Aluminum Alloy Frame",
            "Anti-Slip Silicone Pads",
            "Foldable Design",
            "Improved Ventilation"
        ],
        specifications: {
            material: "Aluminum Alloy",
            weightCapacity: "10kg",
            compatibility: "10\" to 17.3\" laptops",
            weight: "1.2kg",
            dimensions: "28 x 24 x 5 cm"
        },
        mainProduct: false
    },
    item3: {
        name: "Razer DeathAdder V2 Gaming Mouse",
        images: [
            "https://res.cloudinary.com/dom4vyzw7/image/upload/v1747861991/61C3xYVKtZL_hemdvr_e_background_removal_f_png_vtf78z.png"
        ],
        price: 59.99,
        description: "High-precision ergonomic gaming mouse with customizable RGB and ultra-fast response.",
        features: [
            "20,000 DPI Optical Sensor",
            "Razer Chroma RGB",
            "8 Programmable Buttons",
            "Ergonomic Right-Handed Design",
            "Speedflex Cable"
        ],
        specifications: {
            dpi: "20,000",
            buttons: 8,
            connectivity: "USB Wired",
            lighting: "Chroma RGB",
            compatibility: "Windows, macOS"
        },
        mainProduct: false
    }
}
