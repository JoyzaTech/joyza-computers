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
    },
    item4: {
        name: "Apple MacBook Air 15\" (M2, 2023)",
        images: [
            "https://res.cloudinary.com/dom4vyzw7/image/upload/v1747883769/download_hlbqu9_e_background_removal_f_png_nuycus.png"
        ],
        price: 1299.00,
        description: "Sleek and powerful 15-inch MacBook Air with the M2 chip, ideal for productivity and media.",
        features: [
            "15.3\" Liquid Retina Display",
            "Apple M2 Chip with 8-core CPU",
            "8GB Unified Memory",
            "256GB SSD",
            "macOS"
        ],
        specifications: {
            processor: "Apple M2 (8-core CPU, 10-core GPU)",
            ram: "8GB Unified Memory",
            storage: "256GB SSD",
            graphics: "Integrated Apple GPU",
            os: "macOS Ventura"
        },
        mainProduct: true
    },
    item5: {
        name: "Lenovo Legion Pro 5i Gen 8",
        images: [
            "https://res.cloudinary.com/dom4vyzw7/image/upload/v1747883831/lenovo-legion-pro-5i-gen8-02_jlfmtw.avif"
        ],
        price: 1599.99,
        description: "Gaming powerhouse with high refresh rate display and RTX 4070 for serious performance.",
        features: [
            "16\" WQXGA 165Hz Display",
            "Intel Core i7-13700HX",
            "16GB DDR5 RAM",
            "1TB SSD",
            "NVIDIA RTX 4070"
        ],
        specifications: {
            processor: "Intel Core i7-13700HX",
            ram: "16GB DDR5",
            storage: "1TB PCIe SSD",
            graphics: "NVIDIA GeForce RTX 4070 8GB",
            os: "Windows 11 Home"
        },
        mainProduct: true
    },
    item6: {
        name: "HP Pavilion x360 14\" 2-in-1",
        images: [
            "https://res.cloudinary.com/dom4vyzw7/image/upload/v1747883964/61HF3vNmogL_weulpd_e_background_removal_f_png_g4xvy0.png"
        ],
        price: 599.99,
        description: "Versatile convertible laptop with touchscreen and solid performance for everyday use.",
        features: [
            "14\" Full HD Touch Display",
            "Intel Core i5-1335U",
            "8GB DDR4 RAM",
            "512GB SSD",
            "Windows 11 Home"
        ],
        specifications: {
            processor: "Intel Core i5-1335U",
            ram: "8GB DDR4",
            storage: "512GB SSD",
            graphics: "Intel Iris Xe Graphics",
            os: "Windows 11 Home"
        },
        mainProduct: false
    },
    item7: {
        name: "ASUS ROG Zephyrus G14 (2023)",
        images: [
            "https://res.cloudinary.com/dom4vyzw7/image/upload/v1747884080/N5318829__1__92527_jtbzw4_e_background_removal_f_png_pz9kto.png"
        ],
        price: 1799.99,
        description: "Powerful and portable gaming laptop with AMD Ryzen and RTX graphics for top-tier performance.",
        features: [
            "14\" QHD+ 165Hz Display",
            "AMD Ryzen 9 7940HS",
            "16GB LPDDR5 RAM",
            "1TB SSD",
            "NVIDIA RTX 4060"
        ],
        specifications: {
            processor: "AMD Ryzen 9 7940HS",
            ram: "16GB LPDDR5",
            storage: "1TB SSD",
            graphics: "NVIDIA GeForce RTX 4060 8GB",
            os: "Windows 11 Home"
        },
        mainProduct: true
    },
    item8: {
        name: "Microsoft Surface Laptop 5 13.5”",
        images: [
            "https://res.cloudinary.com/dom4vyzw7/image/upload/v1747884189/61lYDihIxqL_fekooi_e_background_removal_f_png_hwg99g.png"
        ],
        price: 999.99,
        description: "Elegant and lightweight laptop with touchscreen and long battery life, ideal for productivity and portability.",
        features: [
            "13.5\" PixelSense Touch Display",
            "Intel Core i5-1235U",
            "8GB LPDDR5 RAM",
            "512GB SSD",
            "Windows 11 Home"
        ],
        specifications: {
            processor: "Intel Core i5-1235U",
            ram: "8GB LPDDR5",
            storage: "512GB SSD",
            graphics: "Intel Iris Xe Graphics",
            os: "Windows 11 Home"
        },
        mainProduct: false
    }
}



export let software = {
    item1: {
        name: "Adobe Photoshop",
        images: [
            "https://res.cloudinary.com/dom4vyzw7/image/upload/v1747861316/adobe-photoshop_2019_photoshop-logo_b0uhvl_e_background_removal_f_png_eftxaf.png"
        ],
        price: 89.99,
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
    },
    item4: {
        name: "Microsoft Office 365 Personal",
        images: [
            "https://res.cloudinary.com/dom4vyzw7/image/upload/v1747884428/Panel0-116-BBtile-EN_rsyiih.avif"
        ],
        price: 69.99,
        description: "Comprehensive productivity suite including Word, Excel, PowerPoint, and more.",
        features: [
            "1TB OneDrive Cloud Storage",
            "Access Across Devices",
            "AI-Powered Editor in Word",
            "Excel Data Types & Templates",
            "Teams Integration"
        ],
        specifications: {
            platform: "Windows, macOS, Android, iOS, Web",
            license: "1 Year / 1 User",
            fileSize: "Varies by device",
            version: "Microsoft 365 (2025)",
            supportedApps: "Word, Excel, PowerPoint, Outlook, OneNote, Access (PC only)"
        },
        mainProduct: true
    },
    item5: {
        name: "Autodesk AutoCAD LT",
        images: [
            "https://res.cloudinary.com/dom4vyzw7/image/upload/v1747884519/057Q1-WW6525-L347-1__65298_nr49hc_e_background_removal_f_png_sd8q92.png"
        ],
        price: 460.00,
        description: "Professional 2D drafting software for engineers, architects, and designers.",
        features: [
            "Precision 2D Drafting Tools",
            "DWG File Format Support",
            "Collaborative Markup",
            "Cloud Storage Integration",
            "Customizable User Interface"
        ],
        specifications: {
            platform: "Windows, macOS",
            license: "Annual Subscription",
            fileSize: "2GB",
            version: "2025",
            supportedFormats: "DWG, DXF, DWF, PDF"
        },
        mainProduct: false
    },
    item6: {
        name: "Final Cut Pro",
        images: [
            "https://res.cloudinary.com/dom4vyzw7/image/upload/v1747884589/2015_Final_Cut_Pro_Logo_h5pjdj.png"
        ],
        price: 299.99,
        description: "Professional video editing software for Mac users, optimized for performance and creativity.",
        features: [
            "Magnetic Timeline",
            "Multicam Editing",
            "Advanced Color Grading",
            "360° Video and HDR Support",
            "Optimized for Apple Silicon"
        ],
        specifications: {
            platform: "macOS only",
            license: "One-Time Purchase",
            fileSize: "3GB",
            version: "10.7.1",
            supportedFormats: "MOV, MP4, ProRes, HEVC, AVCHD"
        },
        mainProduct: true
    },
    item7: {
        name: "Slack",
        images: [
            "https://res.cloudinary.com/dom4vyzw7/image/upload/v1747884637/Slack_icon_2019.svg_x4uvdg.png"
        ],
        price: 0.00,
        description: "Popular team collaboration and messaging platform with free and paid plans.",
        features: [
            "Channels for Organized Conversations",
            "Voice & Video Calls",
            "App Integrations (Google Drive, Jira, etc.)",
            "File Sharing",
            "Workflow Automation"
        ],
        specifications: {
            platform: "Windows, macOS, Linux, Android, iOS, Web",
            license: "Freemium / Subscription",
            fileSize: "200MB (Desktop)",
            version: "2025",
            integrations: "Google Workspace, Microsoft 365, GitHub, Trello, Zoom, more"
        },
        mainProduct: false
    },
    item8: {
        name: "Blender",
        images: [
            "https://res.cloudinary.com/dom4vyzw7/image/upload/v1747884716/main-qimg-ed0d0a753849971ea8224fbf9bcc99fb-lq_vp5t76_e_background_removal_f_png_llindu.png"
        ],
        price: 0.00,
        description: "Free and open-source 3D creation suite for modeling, animation, rendering, and VFX.",
        features: [
            "Full 3D Pipeline (Modeling, Sculpting, Animation)",
            "Cycles and Eevee Rendering",
            "Video Editing Suite",
            "Python Scripting Support",
            "Cross-Platform"
        ],
        specifications: {
            platform: "Windows, macOS, Linux",
            license: "Open Source (GPL)",
            fileSize: "300MB",
            version: "4.1",
            supportedFormats: "BLEND, OBJ, FBX, STL, GLTF, more"
        },
        mainProduct: true
    }
}



export let accessories = {
    item1: {
        name: "Sony WH-1000XM5 Wireless Headphones",
        images: [
            "https://res.cloudinary.com/dom4vyzw7/image/upload/v1747861848/Sony-WH-1000XM5-Bluetooth-Wireless-Noise-Canceling-Headphones-Blue_b23a8559-98bc-495f-8920-5aa301f10712.5e65f2df8c845cc47e1a20fdca2b41cd_cmghy2_e_background_removal_f_png.webp_awqzjj.png"
        ],
        price: 99.99,
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
    },
    item4: {
        name: "Logitech MX Keys Wireless Keyboard",
        images: [
            "https://res.cloudinary.com/dom4vyzw7/image/upload/v1747884890/71gOLg2-kqL_jyvayp_e_background_removal_f_png_hltfxl.png"
        ],
        price: 99.99,
        description: "Premium wireless keyboard with smart illumination and multi-device support.",
        features: [
            "Smart Backlit Keys",
            "USB-C Rechargeable",
            "Multi-Device Pairing",
            "Mac/Windows Compatibility",
            "Comfortable Typing Experience"
        ],
        specifications: {
            connectivity: "Bluetooth / USB Receiver",
            batteryLife: "Up to 10 days (backlit), 5 months (no backlight)",
            weight: "810g",
            compatibility: "Windows, macOS, Linux, Android, iOS",
            dimensions: "430.2 x 131.63 x 20.5 mm"
        },
        mainProduct: true
    },
    item5: {
        name: "Anker PowerCore 10000 Portable Charger",
        images: [
            "https://res.cloudinary.com/dom4vyzw7/image/upload/v1747885007/Anker-PowerCore-Select-10000-Portable-Charger-Black-Ultra-Compact-High-Speed-Charging-Technology-Phone-Charger-for-iPhone-Samsung-and-More_621e9d8d-b4b2-4e15-b4cd-b439561ec4d0.c822834630c31c13416f2aacb33ddd5e_v_mrpvrb.png"
        ],
        price: 29.99,
        description: "Compact and fast-charging portable power bank with 10,000mAh capacity.",
        features: [
            "High-Speed Charging with PowerIQ",
            "Ultra-Compact Design",
            "MultiProtect Safety System",
            "10,000mAh Capacity",
            "Universal Compatibility"
        ],
        specifications: {
            capacity: "10000mAh",
            output: "12W",
            input: "Micro USB",
            weight: "180g",
            color: "Black"
        },
        mainProduct: false
    },
    item6: {
        name: "Elgato Stream Deck Mini",
        images: [
            "https://res.cloudinary.com/dom4vyzw7/image/upload/v1747885145/Corsair-Elgato-Stream-Deck-MK-2-with-15-Customizable-LCD-Keys-Tactile-Control-Interface-10GBA9901_6661a3e0-2ffd-4b2b-a64a-b10d4cbaca53.e18cc1bbd44e2c6619f250765b8ad568_kxcrwc_e_background_removal_f_png.avif_xcth2j.png"
        ],
        price: 79.99,
        description: "Compact studio controller with customizable LCD keys for streamers and creators.",
        features: [
            "6 Customizable LCD Keys",
            "Instant Scene Switching",
            "Hotkey Shortcuts",
            "Social Media Control",
            "Drag-and-Drop Setup"
        ],
        specifications: {
            keys: 6,
            connectivity: "USB 2.0",
            software: "Stream Deck Software",
            compatibility: "Windows 10+, macOS 10.13+",
            dimensions: "84 x 60 x 58 mm"
        },
        mainProduct: false
    },
    item7: {
        name: "Samsung T7 Portable SSD 1TB",
        images: [
            "https://res.cloudinary.com/dom4vyzw7/image/upload/v1747885270/91YfRIy7kYL_edcrb9_e_background_removal_f_png_avyznk.png"
        ],
        price: 119.99,
        description: "High-speed external SSD for fast transfers, durability, and compact storage.",
        features: [
            "USB 3.2 Gen 2",
            "Read/Write Up to 1,050 MB/s",
            "Shock Resistant",
            "Password Protection with AES 256-bit Encryption",
            "Compact and Sleek"
        ],
        specifications: {
            capacity: "1TB",
            interface: "USB-C",
            speed: "Up to 1,050 MB/s",
            weight: "58g",
            dimensions: "85 x 57 x 8.0 mm"
        },
        mainProduct: false
    },
    item8: {
        name: "Logitech C920 HD Pro Webcam",
        images: [
            "https://res.cloudinary.com/dom4vyzw7/image/upload/v1747885370/71eGb1FcyiL_zaybfb_e_background_removal_f_png_er6tx7.png"
        ],
        price: 69.99,
        description: "Full HD 1080p webcam for video calls, streaming, and recording with stereo audio.",
        features: [
            "Full HD 1080p at 30fps",
            "Dual Microphones for Stereo Sound",
            "Auto Light Correction",
            "Tripod-Ready Mount",
            "Wide 78° Field of View"
        ],
        specifications: {
            resolution: "1080p / 720p",
            frameRate: "30fps",
            connectivity: "USB-A",
            compatibility: "Windows, macOS, Chrome OS",
            fieldOfView: "78°"
        },
        mainProduct: true
    }
}

