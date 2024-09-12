using Microsoft.AspNetCore.Mvc;
using ProductBackend.Model;
using ProductBackend.Service;

namespace ProductBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ProductService _productService;

        public ProductController(ProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetAllProducts()
        {
            var products = await _productService.GetAllProductsAsync();
            return Ok(products);
        }

        [HttpPost]
        public async Task<IActionResult> AddProduct([FromBody] Product product)
        {
            if (product == null)
            {
                return BadRequest("Product is null.");
            }

            try
            {
                bool result = await _productService.AddProduct(product);

                if (result)
                {
                    return Ok(new { message = "Product added successfully." });
                }
                else
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, "Error occurred while adding the product.");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Internal server error: {ex.Message}");
            }
        }

    }
}
