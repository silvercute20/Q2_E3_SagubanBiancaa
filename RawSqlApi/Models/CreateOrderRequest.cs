namespace RawSqlApi.Models
{
    public class CreateOrderRequest
    {
        public int CustomerID { get; set; }
        public string Product { get; set; }
        public double Price { get; set; }
    }
}