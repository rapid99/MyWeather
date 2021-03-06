﻿using Microsoft.AspNetCore.Mvc;

namespace WeatherApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }

        public IActionResult WeatherJS ()
        {
            return View();
        }

        public IActionResult CurrentWeather()
        {
            return View();
        }
    }
}
