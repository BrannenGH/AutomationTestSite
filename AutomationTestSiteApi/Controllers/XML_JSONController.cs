using AutomationTestSite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Http;
using AutomationTestSite;

namespace AutomationTestSite.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class XML_JSONController : ControllerBase
    {
        Product[] products = new Product[]
        {
            new Product { Id = 1, Name = "Tomato Soup", Category = "Groceries", Price = 1 },
            new Product { Id = 2, Name = "Yo-yo", Category = "Toys", Price = 3.75M },
            new Product { Id = 3, Name = "Hammer", Category = "Hardware", Price = 16.99M }
        };

        // GET /api/XML_JSON/GetAllProducts
        /// <summary>
        /// Gets all the products
        /// </summary>
        /// <returns>A string of all products<see cref="Product"/></returns>
        [HttpGet("/api/[controller]/GetAllProducts")]
        public ActionResult<IEnumerable<Product>> GetAllProducts()
        {
            if (products.Length < 1)
            {
                return NotFound();
            }

            return Ok(products);
        }

        [HttpGet("/api/[controller]/{id}")]
        public ActionResult<Product> GetProduct(int id)
        {
            var product = products.FirstOrDefault((p) => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        [HttpDelete("/api/[controller]/{id}")]
        public IActionResult Delete(int id)
        {
            if (id > 1)
            {
                IEnumerable<string> values = Request.Headers["pass"];

                // Check the header for the security override first, only return a conflict if they don't have the override
                if (values != null || !values.First().Equals("word"))
                {
                    return this.CreateErrorResponse(StatusCodes.Status409Conflict, "Product could not be deleted");
                }
            }

            return Ok();
        }

        [HttpPut("/api/[controller]/{id}")]
        public IActionResult Put(int id, [FromBody] Product value)
        {
            if (value != null)
            {
                if (id > 20)
                {
                    return this.CreateErrorResponse(StatusCodes.Status500InternalServerError, "An error occurred attempting to update Servers");
                }
                else
                {
                    return new OkResult();
                }
            }
            else
            {
                return this.CreateErrorResponse(StatusCodes.Status409Conflict, string.Format("No Product found for name = {0} ", id));
            }
        }


        [HttpPost("/api/[controller]/")]
        public IActionResult Post([FromBody] Product value)
        {
            IActionResult response = new StatusCodeResult(StatusCodes.Status500InternalServerError);

            if (value != null)
            {
                if (value.Id < 4)
                {
                    // response = ResponseMessage(Request.CreateErrorResponse(HttpStatusCode.Conflict, "Duplicate value"));
                    response = new ConflictResult();
                }
                else
                {
                    //response = ResponseMessage(new HttpResponseMessage(HttpStatusCode.OK));
                    return new OkResult();
                }
            }

            return response;
        }

        [HttpPatch("/api/[controller]/{id}")]
        public IActionResult Patch(int id, [FromBody] Product value)
        {
            IActionResult response = new BadRequestResult();

            if (value != null)
            {
                if (id > 20)
                {
                    response = new NotFoundResult();
                }
                else
                {
                    response = Ok(value);
                }
            }

            return response;
        }
    }
}