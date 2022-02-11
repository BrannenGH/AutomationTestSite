using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;
using System.Xml.Serialization;

namespace AutomationTestSite.Models
{
    [DataContract]
    public sealed class Product
    {
        [DataMember(Name = "Id", Order = 1), Required, Key, Range(0.0, 50.0)]
        public int Id { get; set; }

     
        [DataMember(Name = "Name", Order = 2)]
        public string Name { get; set; }

       
        [DataMember(Name = "Category", Order = 3)]
        public string Category { get; set; }


        [DataMember(Name = "Price", Order = 4)]
        public decimal Price { get; set; }
    }
}