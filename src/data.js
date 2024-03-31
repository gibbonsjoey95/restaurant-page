 const menuItems = [
    {
      "name": "Margherita Supreme",
      "description": "Our Margherita Supreme is a classic Italian favorite with a twist. Featuring San Marzano tomato sauce, fresh mozzarella cheese, ripe Roma tomatoes, fragrant basil leaves, and a sprinkle of Parmesan cheese.",
      "ingredients": ["San Marzano tomato sauce", "fresh mozzarella cheese", "Roma tomatoes", "basil leaves", "Parmesan cheese"],
      "prices": {
        "small": 10.99,
        "large": 14.99
      }
    },
    {
      "name": "Meat Lover's Paradise",
      "description": "Calling all meat enthusiasts! Indulge in our Meat Lover's Paradise pizza, loaded with pepperoni, Italian sausage, ham, bacon, and seasoned ground beef, all atop a zesty marinara sauce and mozzarella cheese blend.",
      "ingredients": ["Marinara sauce", "mozzarella cheese", "pepperoni", "Italian sausage", "ham", "bacon", "seasoned ground beef"],
      "prices": {
        "small": 12.99,
        "large": 16.99
      }
    },
    {
      "name": "Veggie Delight",
      "description": "For our vegetarian friends, the Veggie Delight is a medley of garden-fresh goodness. Packed with colorful bell peppers, red onions, black olives, mushrooms, and spinach, atop a tangy marinara sauce and mozzarella cheese.",
      "ingredients": ["Marinara sauce", "mozzarella cheese", "bell peppers", "red onions", "black olives", "mushrooms", "spinach"],
      "prices": {
        "small": 11.99,
        "large": 15.99
      }
    },
    {
      "name": "BBQ Chicken Feast",
      "description": "Get ready for a flavor explosion with our BBQ Chicken Feast pizza. Tender grilled chicken breast marinated in tangy barbecue sauce, paired with caramelized onions, crispy bacon, fresh cilantro, and a blend of mozzarella and cheddar cheeses.",
      "ingredients": ["BBQ sauce", "mozzarella cheese", "cheddar cheese", "grilled chicken breast", "caramelized onions", "bacon", "cilantro"],
      "prices": {
        "small": 12.99,
        "large": 16.99
      }
    },
    {
      "name": "Hawaiian Luau",
      "description": "Transport yourself to a tropical paradise with our Hawaiian Luau pizza. Topped with sweet pineapple chunks, savory Canadian bacon, and a hint of jalapenos for a spicy kick, all on a base of marinara sauce and mozzarella cheese.",
      "ingredients": ["Marinara sauce", "mozzarella cheese", "pineapple chunks", "Canadian bacon", "jalapenos"],
      "prices": {
        "small": 11.99,
        "large": 15.99
      }
    }
  ]

  const storeHours = [
    {
        day: "Monday",
        open: "10:30",
        close: "12",
    },
    {
        day: "Tuesday",
        open: "10:30",
        close: "12",
    },
    {
        day: "Wednesday",
        open: "10:30",
        close: "12",
    },
    {
        day: "Thursday",
        open: "10:30",
        close: "12",
    },
    {
        day: "Friday",
        open: "10:30",
        close: "1",
    },
    {
        day: "Saturday",
        open: "10:30",
        close: "1",
    },
    {
        day: "Sunday",
        open: "10:30",
        close: "12",
    },
  ]

export { menuItems, storeHours }