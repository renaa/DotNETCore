﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace DotNETCore.Controllers
{
    public class AwesomeBoardController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}