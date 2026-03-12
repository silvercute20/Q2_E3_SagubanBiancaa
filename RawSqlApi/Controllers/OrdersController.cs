using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RawSqlApi.Data;
using RawSqlApi.Models;

namespace RawSqlApi.Controllers
{
    [ApiController]
    [Route("api/orders")]
    public class OrdersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public OrdersController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetOrders()
        {
            var sql = @"SELECT c.Name as CustomerName, o.Product, o.Price
                        FROM Customers c
                        JOIN Orders o ON c.Id = o.CustomerID";

            var result = await _context.Database
                .SqlQuery<CustomerOrderModel>(sql)
                .ToListAsync();

            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> CreateOrder(CreateOrderRequest request)
        {
            var sql = "INSERT INTO Orders (CustomerID, Product, Price) VALUES ({0}, {1}, {2})";

            var rowsAffected = await _context.Database.ExecuteSqlRawAsync(
                sql,
                request.CustomerID,
                request.Product,
                request.Price
            );

            return Ok(new { message = "Order created successfully", rowsAffected });
        }
    }
}