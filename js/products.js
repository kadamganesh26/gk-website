/*
  Products JavaScript File
  RK Corporation - IT Hardware Business Website
*/

// Product Data
const products = [
  {
    id: 1,
    name: 'Lenovo ThinkPad T440p',
    specs: [
      'Intel Core i5 4th Gen',
      '8GB RAM',
      '256GB SSD',
      '14" Display'
    ],
    price: 17500,
    image: 'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    hotDeal: true
  },
  {
    id: 2,
    name: 'Lenovo ThinkPad T490',
    specs: [
      'Intel Core i5 8th Gen',
      '16GB RAM',
      '512GB SSD',
      '14" Full HD Display'
    ],
    price: 25000,
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    hotDeal: true
  },
  {
    id: 3,
    name: 'Dell Precision 3551 Workstation',
    specs: [
      'Intel Core i7 10th Gen',
      '16GB RAM',
      '512GB SSD',
      '15.6" Full HD Display'
    ],
    price: 37500,
    image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    hotDeal: true
  },
  {
    id: 4,
    name: 'DELL PRECISION 5560',
    specs: [
      'Intel Core i9 Processor',
      '64GB RAM',
      '1TB SSD',
      'NVIDIA RTX A2000 GPU',
      '15.6" 4K Display'
    ],
    price: 84500,
    image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    hotDeal: true
  },
  {
    id: 5,
    name: 'Microsoft Surface 3 Touch',
    specs: [
      'Intel Core i5 8th Gen',
      '8GB RAM',
      '256GB SSD',
      '13.5" Touchscreen'
    ],
    price: 27500,
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    hotDeal: true
  },
  {
    id: 6,
    name: 'HP ZBook Workstation',
    specs: [
      'Intel Core i7 Processor',
      '16GB RAM',
      '512GB SSD',
      '4GB NVIDIA Graphics Card',
      '15.6" Full HD Display'
    ],
    price: 31500,
    image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    hotDeal: true
  },
  {
    id: 7,
    name: 'Apple MacBook Air A2179',
    specs: [
      'Intel Core i5 Processor',
      '8GB RAM',
      '512GB SSD',
      '13.3" Retina Display'
    ],
    price: 42500,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    hotDeal: true
  },
  {
    id: 8,
    name: 'Lenovo ThinkPad X1 Carbon',
    specs: [
      'Intel Core i7 10th Gen',
      '16GB RAM',
      '512GB SSD',
      '14" 4K IPS Display'
    ],
    price: 45000,
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    hotDeal: false
  },
  {
    id: 9,
    name: 'Dell Latitude 7410',
    specs: [
      'Intel Core i5 10th Gen',
      '8GB RAM',
      '256GB SSD',
      '14" Full HD Display'
    ],
    price: 22500,
    image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    hotDeal: false
  },
  {
    id: 10,
    name: 'HP EliteBook 840 G6',
    specs: [
      'Intel Core i5 8th Gen',
      '8GB RAM',
      '256GB SSD',
      '14" Full HD Display'
    ],
    price: 19500,
    image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    hotDeal: false
  }
];

// DOM Elements
const hotDealsGrid = document.getElementById('hot-deals-grid');
const allProductsGrid = document.getElementById('all-products-grid');
const searchInput = document.getElementById('search-input');
const brandFilter = document.getElementById('brand-filter');
const priceFilter = document.getElementById('price-filter');

// Initialize Products Display
document.addEventListener('DOMContentLoaded', function() {
  renderHotDeals();
  renderAllProducts();
  
  // Add event listeners for search and filters
  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }
  
  if (brandFilter) {
    brandFilter.addEventListener('change', applyFilters);
  }
  
  if (priceFilter) {
    priceFilter.addEventListener('change', applyFilters);
  }
});

// Render Hot Deals
function renderHotDeals() {
  if (!hotDealsGrid) return;
  
  const hotDeals = products.filter(product => product.hotDeal);
  hotDealsGrid.innerHTML = '';
  
  hotDeals.forEach(product => {
    hotDealsGrid.appendChild(createProductCard(product));
  });
}

// Render All Products
function renderAllProducts() {
  if (!allProductsGrid) return;
  
  allProductsGrid.innerHTML = '';
  
  products.forEach(product => {
    allProductsGrid.appendChild(createProductCard(product));
  });
}

// Create Product Card
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(product.price);
  
  // Create HTML for specs list
  const specsList = product.specs.map(spec => {
    return `
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
        ${spec}
      </li>
    `;
  }).join('');
  
  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}">
      ${product.hotDeal ? '<span class="hot-deal-badge">HOT DEAL</span>' : ''}
    </div>
    <div class="product-details">
      <h3 class="product-title">${product.name}</h3>
      <ul class="product-specs">
        ${specsList}
      </ul>
      <div class="product-price">
        <span class="price">${formattedPrice}</span>
        <a href="https://wa.me/918459839992?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}" class="btn btn-sm btn-primary">Inquire</a>
      </div>
    </div>
  `;
  
  return card;
}

// Apply Search and Filters
function applyFilters() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedBrand = brandFilter.value;
  const selectedPrice = priceFilter.value;
  
  const filteredProducts = products.filter(product => {
    // Search term filter
    const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                         product.specs.some(spec => spec.toLowerCase().includes(searchTerm));
    
    // Brand filter
    const matchesBrand = selectedBrand === 'all' || 
                        product.name.toLowerCase().includes(selectedBrand.toLowerCase());
    
    // Price filter
    let matchesPrice = true;
    if (selectedPrice !== 'all') {
      const [min, max] = selectedPrice.split('-');
      if (max) {
        matchesPrice = product.price >= parseInt(min) && product.price <= parseInt(max);
      } else {
        // Handle '50000+' case
        matchesPrice = product.price >= parseInt(min.replace('+', ''));
      }
    }
    
    return matchesSearch && matchesBrand && matchesPrice;
  });
  
  // Update hot deals grid
  if (hotDealsGrid) {
    const filteredHotDeals = filteredProducts.filter(product => product.hotDeal);
    hotDealsGrid.innerHTML = '';
    
    if (filteredHotDeals.length > 0) {
      filteredHotDeals.forEach(product => {
        hotDealsGrid.appendChild(createProductCard(product));
      });
    } else {
      hotDealsGrid.innerHTML = '<p class="no-results">No hot deals match your criteria.</p>';
    }
  }
  
  // Update all products grid
  if (allProductsGrid) {
    allProductsGrid.innerHTML = '';
    
    if (filteredProducts.length > 0) {
      filteredProducts.forEach(product => {
        allProductsGrid.appendChild(createProductCard(product));
      });
    } else {
      allProductsGrid.innerHTML = '<p class="no-results">No products match your criteria.</p>';
    }
  }
}