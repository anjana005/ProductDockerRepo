﻿using System.ComponentModel.DataAnnotations;

namespace ProductBackend.Model
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public double Price { get; set; } 
        public string ImageUrl { get; set; }= string.Empty;
    }
}
