// Al-Shareef Market - E-commerce JavaScript
$(document).ready(function() {
    
    // Product Data
    const products = [
        // Food & Spices Category
        {
            id: 1,
            name: "Premium Egyptian Dukkah",
            category: "Food & Spices",
            price: 18.99,
            image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop",
            description: "Traditional Egyptian spice blend with nuts, herbs, and spices. Perfect for dipping bread or seasoning dishes.",
            inStock: true,
            popularity: 95
        },
        {
            id: 2,
            name: "Authentic Ras El Hanout",
            category: "Food & Spices",
            price: 22.50,
            image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop",
            description: "Complex North African spice blend with over 12 aromatic spices. Essential for tagines and stews.",
            inStock: true,
            popularity: 88
        },
        {
            id: 3,
            name: "Egyptian Hibiscus Tea (Karkade)",
            category: "Food & Spices",
            price: 15.75,
            image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
            description: "Premium dried hibiscus flowers. Rich in antioxidants, can be served hot or cold.",
            inStock: true,
            popularity: 92
        },
        {
            id: 4,
            name: "Organic Egyptian Dates",
            category: "Food & Spices",
            price: 24.99,
            image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=300&fit=crop",
            description: "Premium Medjool dates from Egyptian oases. Naturally sweet and nutritious.",
            inStock: true,
            popularity: 90
        },
        
        // Textiles & Fashion Category
        {
            id: 5,
            name: "Handwoven Cotton Scarf",
            category: "Textiles & Fashion",
            price: 45.00,
            image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=300&fit=crop",
            description: "Beautiful handwoven cotton scarf with traditional Egyptian patterns. Soft and versatile.",
            inStock: true,
            popularity: 85
        },
        {
            id: 6,
            name: "Egyptian Cotton Galabeya",
            category: "Textiles & Fashion",
            price: 89.99,
            image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=300&fit=crop",
            description: "Traditional Egyptian robe made from premium Egyptian cotton. Comfortable and elegant.",
            inStock: true,
            popularity: 78
        },
        {
            id: 7,
            name: "Embroidered Table Runner",
            category: "Textiles & Fashion",
            price: 52.50,
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
            description: "Beautifully embroidered table runner with geometric patterns. Perfect for dining decor.",
            inStock: true,
            popularity: 82
        },
        
        // Crafts & Home Decor Category
        {
            id: 8,
            name: "Brass Moroccan Lantern",
            category: "Crafts & Home Decor",
            price: 125.00,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            description: "Handcrafted brass lantern with intricate geometric patterns. Creates beautiful ambient lighting.",
            inStock: true,
            popularity: 94
        },
        {
            id: 9,
            name: "Ceramic Tagine Pot",
            category: "Crafts & Home Decor",
            price: 78.99,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            description: "Authentic ceramic tagine for slow-cooking traditional North African dishes.",
            inStock: true,
            popularity: 87
        },
        {
            id: 10,
            name: "Handmade Copper Tray",
            category: "Crafts & Home Decor",
            price: 95.50,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            description: "Beautiful handmade copper serving tray with traditional engravings.",
            inStock: true,
            popularity: 80
        },
        {
            id: 11,
            name: "Mosaic Wall Art",
            category: "Crafts & Home Decor",
            price: 165.00,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            description: "Stunning mosaic wall art piece featuring traditional Islamic geometric patterns.",
            inStock: true,
            popularity: 91
        },
        
        // Beauty & Wellness Category
        {
            id: 12,
            name: "Black Seed Oil (Habba Sawda)",
            category: "Beauty & Wellness",
            price: 32.99,
            image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop",
            description: "Pure Egyptian black seed oil. Known for its therapeutic and cosmetic benefits.",
            inStock: true,
            popularity: 89
        },
        {
            id: 13,
            name: "Rose Water Spray",
            category: "Beauty & Wellness",
            price: 19.75,
            image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop",
            description: "Pure rose water from Egyptian roses. Natural toner and refreshing mist.",
            inStock: true,
            popularity: 86
        },
        
        // Books & Media Category
        {
            id: 14,
            name: "Egyptian Cookbook",
            category: "Books & Media",
            price: 29.99,
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
            description: "Comprehensive cookbook featuring traditional and modern Egyptian recipes.",
            inStock: true,
            popularity: 83
        },
        {
            id: 15,
            name: "Arabic Calligraphy Art Book",
            category: "Books & Media",
            price: 42.50,
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
            description: "Beautiful collection of Arabic calligraphy art with historical context.",
            inStock: true,
            popularity: 75
        }
    ];

    // Categories Data
    const categories = [
        {
            name: "Food & Spices",
            icon: "fas fa-pepper-hot",
            description: "Authentic spices, teas, and gourmet foods"
        },
        {
            name: "Textiles & Fashion",
            icon: "fas fa-tshirt",
            description: "Traditional clothing and beautiful fabrics"
        },
        {
            name: "Crafts & Home Decor",
            icon: "fas fa-home",
            description: "Handcrafted items and decorative pieces"
        },
        {
            name: "Beauty & Wellness",
            icon: "fas fa-spa",
            description: "Natural beauty and wellness products"
        },
        {
            name: "Books & Media",
            icon: "fas fa-book",
            description: "Cultural books and educational materials"
        }
    ];

    // Shopping Cart
    let cart = JSON.parse(localStorage.getItem('alshareef-cart')) || [];
    
    // Initialize the application
    init();
    
    function init() {
        renderCategories();
        renderProducts(products);
        populateCategoryFilter();
        updateCartUI();
        bindEvents();
        
        // Smooth scrolling for navigation links
        $('a[href^="#"]').on('click', function(e) {
            e.preventDefault();
            const target = $(this.getAttribute('href'));
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 800);
            }
        });
    }
    
    function renderCategories() {
        const container = $('#categoriesContainer');
        container.empty();
        
        categories.forEach(category => {
            const categoryCard = `
                <div class="col-md-6 col-lg-4">
                    <div class="category-card" data-category="${category.name}">
                        <i class="${category.icon}"></i>
                        <h4>${category.name}</h4>
                        <p>${category.description}</p>
                    </div>
                </div>
            `;
            container.append(categoryCard);
        });
    }
    
    function renderProducts(productsToRender) {
        const container = $('#productsContainer');
        container.empty();
        
        if (productsToRender.length === 0) {
            $('#noProducts').removeClass('d-none');
            return;
        } else {
            $('#noProducts').addClass('d-none');
        }
        
        productsToRender.forEach(product => {
            const productCard = `
                <div class="col-md-6 col-lg-4">
                    <div class="product-card" data-product-id="${product.id}">
                        <div class="product-image">
                            <img src="${product.image}" alt="${product.name}" loading="lazy">
                            ${product.popularity > 90 ? '<span class="product-badge">Popular</span>' : ''}
                        </div>
                        <div class="product-info">
                            <h5 class="product-title">${product.name}</h5>
                            <p class="product-description">${product.description}</p>
                            <div class="product-price">$${product.price.toFixed(2)} CAD</div>
                            <div class="product-actions">
                                <button class="btn btn-primary btn-sm add-to-cart" data-product-id="${product.id}">
                                    <i class="fas fa-cart-plus me-1"></i>Add to Cart
                                </button>
                                <button class="btn btn-outline-secondary btn-sm view-details" data-product-id="${product.id}">
                                    <i class="fas fa-eye me-1"></i>Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.append(productCard);
        });
    }
    
    function populateCategoryFilter() {
        const select = $('#categoryFilter');
        categories.forEach(category => {
            select.append(`<option value="${category.name}">${category.name}</option>`);
        });
    }
    
    function bindEvents() {
        // Search functionality
        $('#searchInput').on('input', debounce(handleSearch, 300));
        
        // Filter and sort
        $('#categoryFilter, #sortBy').on('change', applyFilters);
        $('#priceRange').on('input', function() {
            $('#priceValue').text($(this).val());
            applyFilters();
        });
        
        // Category cards click
        $(document).on('click', '.category-card', function() {
            const category = $(this).data('category');
            $('#categoryFilter').val(category);
            applyFilters();
            $('html, body').animate({
                scrollTop: $('#products').offset().top - 80
            }, 800);
        });
        
        // Add to cart
        $(document).on('click', '.add-to-cart', function() {
            const productId = parseInt($(this).data('product-id'));
            addToCart(productId);
        });
        
        // View product details
        $(document).on('click', '.view-details', function() {
            const productId = parseInt($(this).data('product-id'));
            showProductDetails(productId);
        });
        
        // Cart modal
        $('#cartBtn').on('click', function() {
            showCart();
        });
        
        // Clear cart
        $('#clearCart').on('click', function() {
            if (confirm('Are you sure you want to clear your cart?')) {
                clearCart();
            }
        });
        
        // Checkout via WhatsApp
        $('#checkoutBtn').on('click', function() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            sendToWhatsApp();
        });
        
        // Cart quantity controls
        $(document).on('click', '.quantity-btn', function() {
            const productId = parseInt($(this).data('product-id'));
            const action = $(this).data('action');
            updateCartQuantity(productId, action);
        });
        
        // Remove from cart
        $(document).on('click', '.remove-item', function() {
            const productId = parseInt($(this).data('product-id'));
            removeFromCart(productId);
        });
    }
    
    function handleSearch() {
        const query = $('#searchInput').val().toLowerCase().trim();
        let filteredProducts = products;
        
        if (query) {
            filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );
        }
        
        applyFiltersToProducts(filteredProducts);
    }
    
    function applyFilters() {
        let filteredProducts = [...products];
        
        // Apply search filter
        const query = $('#searchInput').val().toLowerCase().trim();
        if (query) {
            filteredProducts = filteredProducts.filter(product => 
                product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );
        }
        
        applyFiltersToProducts(filteredProducts);
    }
    
    function applyFiltersToProducts(filteredProducts) {
        // Category filter
        const selectedCategory = $('#categoryFilter').val();
        if (selectedCategory) {
            filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
        }
        
        // Price filter
        const maxPrice = parseFloat($('#priceRange').val());
        filteredProducts = filteredProducts.filter(product => product.price <= maxPrice);
        
        // Sort
        const sortBy = $('#sortBy').val();
        switch (sortBy) {
            case 'name':
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'price-low':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'popularity':
                filteredProducts.sort((a, b) => b.popularity - a.popularity);
                break;
        }
        
        renderProducts(filteredProducts);
    }
    
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        saveCart();
        updateCartUI();
        showAddToCartFeedback(product.name);
    }
    
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        updateCartUI();
        showCart(); // Refresh cart modal
    }
    
    function updateCartQuantity(productId, action) {
        const item = cart.find(item => item.id === productId);
        if (!item) return;
        
        if (action === 'increase') {
            item.quantity += 1;
        } else if (action === 'decrease') {
            item.quantity -= 1;
            if (item.quantity <= 0) {
                removeFromCart(productId);
                return;
            }
        }
        
        saveCart();
        updateCartUI();
        showCart(); // Refresh cart modal
    }
    
    function clearCart() {
        cart = [];
        saveCart();
        updateCartUI();
        showCart(); // Refresh cart modal
    }
    
    function saveCart() {
        localStorage.setItem('alshareef-cart', JSON.stringify(cart));
    }
    
    function updateCartUI() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        $('#cartCount').text(totalItems);
        
        if (totalItems > 0) {
            $('#cartCount').removeClass('d-none');
        } else {
            $('#cartCount').addClass('d-none');
        }
    }
    
    function showCart() {
        const cartItems = $('#cartItems');
        cartItems.empty();
        
        if (cart.length === 0) {
            cartItems.html(`
                <div class="text-center py-4">
                    <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                    <h5>Your cart is empty</h5>
                    <p class="text-muted">Add some products to get started!</p>
                </div>
            `);
            $('#cartTotal').text('0.00');
        } else {
            let total = 0;
            
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                
                const cartItem = `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-item-info">
                            <div class="cart-item-title">${item.name}</div>
                            <div class="cart-item-price">$${item.price.toFixed(2)} CAD</div>
                            <div class="quantity-controls">
                                <button class="quantity-btn" data-product-id="${item.id}" data-action="decrease">-</button>
                                <input type="number" class="quantity-input" value="${item.quantity}" readonly>
                                <button class="quantity-btn" data-product-id="${item.id}" data-action="increase">+</button>
                                <button class="btn btn-sm btn-outline-danger ms-2 remove-item" data-product-id="${item.id}">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                            <div class="fw-bold">Subtotal: $${itemTotal.toFixed(2)} CAD</div>
                        </div>
                    </div>
                `;
                cartItems.append(cartItem);
            });
            
            $('#cartTotal').text(total.toFixed(2));
        }
        
        $('#cartModal').modal('show');
    }
    
    function showProductDetails(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        $('#productModalTitle').text(product.name);
        $('#productModalBody').html(`
            <div class="row">
                <div class="col-md-6">
                    <img src="${product.image}" alt="${product.name}" class="img-fluid rounded">
                </div>
                <div class="col-md-6">
                    <h5 class="mb-3">${product.name}</h5>
                    <p class="text-muted mb-3">${product.category}</p>
                    <p class="mb-3">${product.description}</p>
                    <div class="mb-3">
                        <span class="h4 text-primary">$${product.price.toFixed(2)} CAD</span>
                    </div>
                    <div class="mb-3">
                        <span class="badge bg-success">In Stock</span>
                        <span class="badge bg-info ms-2">Popularity: ${product.popularity}%</span>
                    </div>
                    <button class="btn btn-primary btn-lg add-to-cart" data-product-id="${product.id}">
                        <i class="fas fa-cart-plus me-2"></i>Add to Cart
                    </button>
                </div>
            </div>
        `);
        
        $('#productModal').modal('show');
    }
    
    function showAddToCartFeedback(productName) {
        // Create a temporary toast notification
        const toast = $(`
            <div class="toast-notification">
                <i class="fas fa-check-circle text-success me-2"></i>
                "${productName}" added to cart!
            </div>
        `);
        
        $('body').append(toast);
        
        // Add CSS for toast if not already added
        if (!$('#toast-styles').length) {
            $('head').append(`
                <style id="toast-styles">
                .toast-notification {
                    position: fixed;
                    top: 100px;
                    right: 20px;
                    background: white;
                    padding: 1rem 1.5rem;
                    border-radius: 10px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
                    z-index: 9999;
                    animation: slideInRight 0.3s ease, slideOutRight 0.3s ease 2.7s;
                    border-left: 4px solid var(--success-color);
                }
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOutRight {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
                </style>
            `);
        }
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
    
    function sendToWhatsApp() {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        // WhatsApp number
        const whatsappNumber = '+201208404930';

        // Calculate totals
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = 9.99;
        const tax = (subtotal + shipping) * 0.13;
        const total = subtotal + shipping + tax;

        // Get current date and time
        const now = new Date();
        const orderDate = now.toLocaleDateString('en-CA');
        const orderTime = now.toLocaleTimeString('en-CA', { hour12: false });
        const orderNumber = 'AS' + Date.now().toString().slice(-6);

        // Create order message
        let message = `🛒 *طلب جديد من الشريف ماركت*\n`;
        message += `*New Order from Al-Shareef Market*\n\n`;

        message += `📋 *معلومات الطلب / Order Information:*\n`;
        message += `رقم الطلب / Order #: *${orderNumber}*\n`;
        message += `التاريخ / Date: ${orderDate}\n`;
        message += `الوقت / Time: ${orderTime}\n`;
        message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

        message += `🛍️ *تفاصيل المنتجات / Product Details:*\n`;

        // Add each product
        cart.forEach((item, index) => {
            message += `*${index + 1}. ${item.name}*\n`;
            message += `   📦 الكمية / Qty: *${item.quantity}*\n`;
            message += `   💰 السعر / Price: $${item.price.toFixed(2)} CAD\n`;
            message += `   🏷️ الفئة / Category: ${item.category}\n`;
            message += `   💵 المجموع / Line Total: *$${(item.price * item.quantity).toFixed(2)} CAD*\n`;
            message += `   ────────────────────────\n`;
        });

        message += `\n💰 *ملخص الفاتورة / Invoice Summary:*\n`;
        message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        message += `المجموع الفرعي / Subtotal: $${subtotal.toFixed(2)} CAD\n`;
        message += `الشحن / Shipping: $${shipping.toFixed(2)} CAD\n`;
        message += `الضريبة / Tax (HST 13%): $${tax.toFixed(2)} CAD\n`;
        message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        message += `🎯 **المجموع الكلي / GRAND TOTAL: $${total.toFixed(2)} CAD**\n`;
        message += `📊 عدد المنتجات / Total Items: ${cart.reduce((sum, item) => sum + item.quantity, 0)}\n\n`;

        message += `📍 *الخطوات التالية / Next Steps:*\n`;
        message += `1️⃣ تأكيد الطلب والكمية / Confirm Order & Quantity\n`;
        message += `2️⃣ إرسال عنوان التوصيل الكامل / Send Complete Delivery Address\n`;
        message += `   (الاسم، العنوان، المدينة، الرمز البريدي)\n`;
        message += `   (Name, Address, City, Postal Code)\n`;
        message += `3️⃣ اختيار طريقة الدفع / Choose Payment Method\n`;
        message += `   💳 (تحويل بنكي، كاش عند التسليم)\n`;
        message += `   💳 (Bank Transfer, Cash on Delivery)\n`;
        message += `4️⃣ تأكيد موعد التوصيل المناسب / Confirm Preferred Delivery Time\n\n`;

        message += `📞 *معلومات التواصل / Contact Information:*\n`;
        message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
        message += `🏪 *الشريف ماركت - Al-Shareef Market*\n`;
        message += `📱 واتس اب / WhatsApp: +201208404930\n`;
        message += `📧 البريد الإلكتروني / Email: info@alshareefmarket.ca\n`;
        message += `🌐 الموقع الإلكتروني / Website: www.alshareefmarket.ca\n`;
        message += `📍 العنوان / Address: 123 Egyptian Way, Toronto, ON\n\n`;

        message += `🇪🇬 *منتجات مصرية أصيلة في كندا* 🇨🇦\n`;
        message += `*Authentic Egyptian Products in Canada*\n`;
        message += `✨ جودة عالية - أسعار منافسة - توصيل سريع\n`;
        message += `✨ High Quality - Competitive Prices - Fast Delivery\n\n`;

        message += `شكراً لاختياركم الشريف ماركت! 🙏\n`;
        message += `Thank you for choosing Al-Shareef Market! 🙏`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);

        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`;

        // Close cart modal
        $('#cartModal').modal('hide');

        // Show confirmation before redirecting
        const confirmModal = `
            <div class="modal fade" id="whatsappConfirmModal" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header bg-success text-white">
                            <h5 class="modal-title">
                                <i class="fab fa-whatsapp me-2"></i>
                                إرسال الطلب عبر الواتس اب
                            </h5>
                        </div>
                        <div class="modal-body text-center">
                            <div class="mb-4">
                                <i class="fab fa-whatsapp text-success" style="font-size: 4rem;"></i>
                            </div>
                            <h4 class="mb-3">تأكيد إرسال الطلب</h4>
                            <p class="mb-3">
                                سيتم تحويلك إلى الواتس اب مع تفاصيل طلبك كاملة<br>
                                <small class="text-muted">You will be redirected to WhatsApp with your complete order details</small>
                            </p>
                            <div class="alert alert-success">
                                <div class="row text-center">
                                    <div class="col-6">
                                        <strong>المجموع الكلي</strong><br>
                                        <span class="h5 text-success">$${total.toFixed(2)} CAD</span>
                                    </div>
                                    <div class="col-6">
                                        <strong>عدد المنتجات</strong><br>
                                        <span class="h5 text-primary">${cart.reduce((sum, item) => sum + item.quantity, 0)} منتج</span>
                                    </div>
                                </div>
                            </div>
                            <div class="alert alert-info">
                                <small>
                                    <i class="fas fa-info-circle me-1"></i>
                                    سيتم إرسال رقم الطلب وكافة التفاصيل تلقائياً<br>
                                    Order number and all details will be sent automatically
                                </small>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                إلغاء / Cancel
                            </button>
                            <button type="button" class="btn btn-success" id="confirmWhatsApp">
                                <i class="fab fa-whatsapp me-2"></i>
                                إرسال عبر الواتس اب
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Remove existing modal if any
        $('#whatsappConfirmModal').remove();

        // Add modal to body
        $('body').append(confirmModal);

        // Show modal
        $('#whatsappConfirmModal').modal('show');

        // Handle confirmation
        $('#confirmWhatsApp').on('click', function() {
            // Open WhatsApp
            window.open(whatsappUrl, '_blank');

            // Clear cart after successful order
            setTimeout(() => {
                clearCart();
                $('#whatsappConfirmModal').modal('hide');

                // Show success message
                showAddToCartFeedback('تم إرسال طلبك بنجاح! Order sent successfully!');
            }, 1000);
        });

        // Clean up modal when closed
        $('#whatsappConfirmModal').on('hidden.bs.modal', function() {
            $(this).remove();
        });
    }
    
    // Utility function for debouncing
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Navbar scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#mainNav').addClass('navbar-scrolled');
        } else {
            $('#mainNav').removeClass('navbar-scrolled');
        }
    });
    
    // Add CSS for navbar scroll effect
    $('head').append(`
        <style>
        .navbar-scrolled {
            background-color: rgba(255, 255, 255, 0.95) !important;
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        </style>
    `);

    // Initialize price range display
    $('#priceValue').text($('#priceRange').val());

    // Add loading states for better UX
    function showLoading(element) {
        const $el = $(element);
        $el.data('original-html', $el.html());
        $el.html('<span class="loading"></span>');
        $el.prop('disabled', true);
    }

    function hideLoading(element) {
        const $el = $(element);
        $el.html($el.data('original-html'));
        $el.prop('disabled', false);
    }

    // Enhanced search with highlighting
    function highlightSearchTerms(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    // Wishlist functionality (stored in localStorage)
    let wishlist = JSON.parse(localStorage.getItem('alshareef-wishlist')) || [];

    function toggleWishlist(productId) {
        const index = wishlist.indexOf(productId);
        if (index > -1) {
            wishlist.splice(index, 1);
        } else {
            wishlist.push(productId);
        }
        localStorage.setItem('alshareef-wishlist', JSON.stringify(wishlist));
        updateWishlistUI();
    }

    function updateWishlistUI() {
        $('.wishlist-btn').each(function() {
            const productId = parseInt($(this).data('product-id'));
            if (wishlist.includes(productId)) {
                $(this).addClass('active').html('<i class="fas fa-heart"></i>');
            } else {
                $(this).removeClass('active').html('<i class="far fa-heart"></i>');
            }
        });
    }

    // Product comparison functionality
    let comparison = JSON.parse(localStorage.getItem('alshareef-comparison')) || [];

    function addToComparison(productId) {
        if (comparison.length >= 3) {
            alert('You can compare up to 3 products at a time.');
            return;
        }

        if (!comparison.includes(productId)) {
            comparison.push(productId);
            localStorage.setItem('alshareef-comparison', JSON.stringify(comparison));
            updateComparisonUI();
        }
    }

    function removeFromComparison(productId) {
        comparison = comparison.filter(id => id !== productId);
        localStorage.setItem('alshareef-comparison', JSON.stringify(comparison));
        updateComparisonUI();
    }

    function updateComparisonUI() {
        // Update comparison count in UI if needed
        $('.comparison-count').text(comparison.length);
    }

    // Recently viewed products
    let recentlyViewed = JSON.parse(localStorage.getItem('alshareef-recent')) || [];

    function addToRecentlyViewed(productId) {
        // Remove if already exists
        recentlyViewed = recentlyViewed.filter(id => id !== productId);
        // Add to beginning
        recentlyViewed.unshift(productId);
        // Keep only last 5
        recentlyViewed = recentlyViewed.slice(0, 5);
        localStorage.setItem('alshareef-recent', JSON.stringify(recentlyViewed));
    }

    // Enhanced product details with recently viewed
    function showProductDetailsEnhanced(productId) {
        addToRecentlyViewed(productId);
        showProductDetails(productId);
    }

    // Newsletter subscription
    function subscribeNewsletter(email) {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ success: true, message: 'Thank you for subscribing!' });
            }, 1000);
        });
    }

    // Contact form submission
    function submitContactForm(formData) {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ success: true, message: 'Message sent successfully!' });
            }, 1500);
        });
    }

    // Enhanced error handling
    function handleError(error, context = '') {
        console.error(`Error in ${context}:`, error);

        // Show user-friendly error message
        const errorToast = $(`
            <div class="toast-notification error">
                <i class="fas fa-exclamation-triangle text-danger me-2"></i>
                Something went wrong. Please try again.
            </div>
        `);

        $('body').append(errorToast);

        setTimeout(() => {
            errorToast.remove();
        }, 3000);
    }

    // Performance optimization: Lazy loading for images
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // Initialize lazy loading
    initLazyLoading();

    // Accessibility improvements
    function enhanceAccessibility() {
        // Add ARIA labels for dynamic content
        $('#cartCount').attr('aria-label', 'Items in cart');

        // Keyboard navigation for product cards
        $('.product-card').attr('tabindex', '0').on('keypress', function(e) {
            if (e.which === 13) { // Enter key
                $(this).find('.view-details').click();
            }
        });

        // Focus management for modals
        $('#cartModal, #productModal, #checkoutModal').on('shown.bs.modal', function() {
            $(this).find('button, input, select, textarea').first().focus();
        });
    }

    // Initialize accessibility enhancements
    enhanceAccessibility();

    // Analytics tracking (placeholder for real implementation)
    function trackEvent(category, action, label = '', value = 0) {
        // This would integrate with Google Analytics, Adobe Analytics, etc.
        console.log('Analytics Event:', { category, action, label, value });

        // Example: gtag('event', action, { event_category: category, event_label: label, value: value });
    }

    // Track important e-commerce events
    function trackAddToCart(product) {
        trackEvent('E-commerce', 'Add to Cart', product.name, product.price);
    }

    function trackPurchase(orderTotal, orderItems) {
        trackEvent('E-commerce', 'Purchase', 'Order Completed', orderTotal);
    }

    function trackProductView(product) {
        trackEvent('E-commerce', 'Product View', product.name);
    }

});
