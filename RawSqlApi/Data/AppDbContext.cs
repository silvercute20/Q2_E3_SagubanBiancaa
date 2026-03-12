using Microsoft.EntityFrameworkCore;

namespace RawSqlApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }
    }
}