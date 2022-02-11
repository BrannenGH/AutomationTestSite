using Microsoft.AspNetCore.Mvc.Formatters;
using WebApiContrib.Core.Formatter.PlainText;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// Add plain text formatter for ZED route
builder.Services.AddControllers().AddPlainTextFormatters().AddXmlSerializerFormatters();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.WebHost.ConfigureKestrel(options => {
    options.AllowSynchronousIO = true;
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
