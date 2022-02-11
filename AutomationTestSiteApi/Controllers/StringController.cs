using AutomationTestSite.Models;
using System;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Http;
using AutomationTestSite;

namespace AutomationTestSite.Controllers
{
    public class StringController : ControllerBase
    {
        Product[] products = new Product[] 
        { 
            new Product { Id = 1, Name = "Tomato Soup", Category = "Groceries", Price = 1 }, 
            new Product { Id = 2, Name = "Yo-yo", Category = "Toys", Price = 3.75M }, 
            new Product { Id = 3, Name = "Hammer", Category = "Hardware", Price = 16.99M } 
        };

        [HttpGet("api/String/Get")]
        public IActionResult Get()
        {
            IActionResult response = null;
            string toBeUsed = string.Empty;
            foreach (var p in products)
            {
                toBeUsed += buildString(p);
            }

            var httpResponse = new HttpResponseMessage(HttpStatusCode.OK);
            httpResponse.Content = new StringContent(toBeUsed);
            httpResponse.Content.Headers.ContentType = new MediaTypeHeaderValue("text/plain");
            response = Ok(httpResponse);
            return response;
        }

        [HttpGet("api/String/{id:int}")]
        public IActionResult GetProduct(int id)
        {
            var product = products.FirstOrDefault((p) => p.Id == id);
            if (product == null)
            {
                return NoContent();
            }

            if (id > 1)
            {
                return Conflict();
            }

            return new ContentResult{
                Content = buildString(product),
                ContentType = "text/plain",
                StatusCode = StatusCodes.Status200OK
            };
        }

        [HttpGet("api/String/{name}")]
        public IActionResult GetProduct(string name)
        {
            var product = products.FirstOrDefault((p) => p.Name.Equals(name, StringComparison.OrdinalIgnoreCase));
            if (product == null)
            {
                return NoContent();
            }

            return new ContentResult{
                Content = buildString(product),
                ContentType = "text/plain",
                StatusCode = StatusCodes.Status200OK
            };
        }

        public IActionResult Delete(int id)
        {
            if (id > 3 || id < 0)
            {
                return NotFound();
            }
            
            return Ok();
        }


        public IActionResult Put(int id, [FromBody] string value)
        {
            if (value != null)
            {
                if (id > 20)
                {
                    return this.CreateErrorResponse(StatusCodes.Status500InternalServerError, "An error occurred attempting to update Servers");
                }
                else
                {
                    return Ok();
                }
            }
            else
            {
                return this.CreateErrorResponse(StatusCodes.Status409Conflict, string.Format("No Product found for name = {0} ", id));
            }
        }

        [HttpPost("api/String/")]
        public IActionResult Post([FromBody]string value)
        {
            if (value != null)
            {
                if (value.Equals(string.Empty))
                {
                    return this.CreateErrorResponse(StatusCodes.Status400BadRequest, "No data");
                }
                else if (value.Contains("Product ID: 1"))
                {
                    return this.CreateErrorResponse(StatusCodes.Status409Conflict, "Duplicate value");
                }
                else
                {
                    return Ok(); 
                }
            }

            return this.CreateErrorResponse(StatusCodes.Status500InternalServerError, "value is required");
        }

        [HttpPatch]
        public IActionResult Patch(int id, [FromBody]string value)
        {
            if (value != null)
            {
                if (id > 20)
                {
                    this.CreateErrorResponse(StatusCodes.Status404NotFound, "No Product found for value");
                }
                else
                {
                    // Below TODO from original ASP.NET MVC application.
                    //// TODO: Figure out why returnValue will fail between streamcontent and stringcontent
                    string returnValue = $"Patched {value}";
                    string returnValue2 = $"Patched";
                    return Ok(returnValue2);
                }
            }

            return this.CreateErrorResponse(StatusCodes.Status400BadRequest, "Value is required");
        }

        [Route("api/ZED")]
        [AcceptVerbs("ZED")]
        public IActionResult Zed([FromBody]string value)
        {
            var httpResponse = new HttpResponseMessage(HttpStatusCode.UseProxy);


            if (value != null)
            {
                // The quotation marks are added so it works like it did in the MVC application.
                return Ok($"\"{value}\"");
            }

            return this.CreateErrorResponse(StatusCodes.Status305UseProxy, "ZED!");
        }

        private string buildString(Product product)
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine("Product ID: " + product.Id + " ");
            sb.AppendLine("Product Name: " + product.Name + " ");
            sb.AppendLine("Product Category " + product.Category + " ");
            sb.AppendLine("Product Price " + product.Price + " ");

            return sb.ToString();
        }
    }
}