using Microsoft.AspNetCore.Mvc;
using MovieApp2.Data;

namespace MovieApp2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;

        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<Movie> Get()
        {
            var x = context.Movies
                .Where(x => x.Edited == "Yes")
                .ToArray();

            return x;
        }
    }
}
