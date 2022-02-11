using Microsoft.AspNetCore.Mvc;

namespace AutomationTestSite {
    public static class Extensions {
        public static IActionResult CreateErrorResponse(this ControllerBase controller, int statusCode, string message) {
            return new ContentResult{
                StatusCode = statusCode,
                Content = message,
                ContentType = "text/plain"
            };
        }
    }
}