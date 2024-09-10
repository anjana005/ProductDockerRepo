using Microsoft.EntityFrameworkCore;
using ProductBackend.Data;
using ProductBackend.Model;

namespace ProductBackend.Service
{
    public class ProductService
    {
        private readonly ProductDbContext _context;

        public ProductService(ProductDbContext context)
        {
            _context = context;
        }

        public async Task<List<Product>> GetAllProductsAsync()
        {
            return await _context.Products.ToListAsync();
        }
    }
}
