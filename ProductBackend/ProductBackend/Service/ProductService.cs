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

        public async Task<bool> AddProduct(Product product)
        {
            if (product == null)
            {
                throw new ArgumentNullException(nameof(product));
            }

            _context.Products.Add(product);

            var result = await _context.SaveChangesAsync();

            return result > 0;
        }
    }
}
