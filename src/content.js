const propertyData = [
    {
      "id": 1,
      "title": "Luxury Villa in Mumbai",
      "image": "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
      "location": "Mumbai, Maharashtra",
      "price_per_month": "₹2,50,000",
      "listing_type": "For Rent"
    },
    {
      "id": 2,
      "title": "Spacious Apartment in Delhi",
      "image": "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=400",
      "location": "Delhi, NCR",
      "price_per_month": "₹35,000",
      "listing_type": "For Rent"
    },
    {
      "id": 3,
      "title": "Cozy Flat in Bangalore",
      "image": "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=400",
      "location": "Bangalore, Karnataka",
      "price_per_month": "₹20,000",
      "listing_type": "For Sale"
    },
    {
      "id": 4,
      "title": "Sea View Penthouse in Goa",
      "image": "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=400",
      "location": "Goa",
      "price_per_month": "₹1,80,000",
      "listing_type": "For Rent"
    },
    {
      "id": 5,
      "title": "Hillside Bungalow in Shimla",
      "image": "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=400",
      "location": "Shimla, Himachal Pradesh",
      "price_per_month": "₹1,50,000",
      "listing_type": "For Sale"
    },
    {
      "id": 6,
      "title": "Riverside Villa in Kerala",
      "image": "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=400",
      "location": "Kochi, Kerala",
      "price_per_month": "₹2,75,000",
      "listing_type": "For Rent"
    },
    {
      "id": 7,
      "title": "Garden Apartment in Pune",
      "image": "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=400",
      "location": "Pune, Maharashtra",
      "price_per_month": "₹30,000",
      "listing_type": "For Rent"
    },
    {
      "id": 8,
      "title": "Historic Mansion in Jaipur",
      "image": "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=400",
      "location": "Jaipur, Rajasthan",
      "price_per_month": "₹2,20,000",
      "listing_type": "For Rent"
    },
    {
      "id": 9,
      "title": "Lake View Cottage in Udaipur",
      "image": "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=400",
      "location": "Udaipur, Rajasthan",
      "price_per_month": "₹1,70,000",
      "listing_type": "For Sale"
    },
    {
      "id": 10,
      "title": "Modern Condo in Chennai",
      "image": "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=400",
      "location": "Chennai, Tamil Nadu",
      "price_per_month": "₹25,000",
      "listing_type": "For Rent"
    },
    {
      "id": 11,
      "title": "Beachfront House in Goa",
      "image": "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=400",
      "location": "Goa",
      "price_per_month": "₹2,10,000",
      "listing_type": "For Rent"
    },
    {
      "id": 12,
      "title": "Mountain View Chalet in Manali",
      "image": "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=400",
      "location": "Manali, Himachal Pradesh",
      "price_per_month": "₹1,60,000",
      "listing_type": "For Rent"
    },
    {
      "id": 13,
      "title": "Luxury Villa in Mumbai",
      "image": "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=400",
      "location": "Mumbai, Maharashtra",
      "price_per_month": "₹2,50,000",
      "listing_type": "For Sale"
    },
    {
      "id": 14,
      "title": "Spacious Apartment in Delhi",
      "image": "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=400",
      "location": "Delhi, NCR",
      "price_per_month": "₹35,00,000",
      "listing_type": "For Sale"
    },
    {
      "id": 15,
      "title": "Cozy Flat in Bangalore",
      "image": "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=400",
      "location": "Bangalore, Karnataka",
      "price_per_month": "₹20,00,000",
      "listing_type": "For Sale"
    },
    {
      "id": 16,
      "title": "Sea View Penthouse in Goa",
      "image": "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=400",
      "location": "Goa",
      "price_per_month": "₹1,80,000",
      "listing_type": "For Sale"
    },
    {
      "id": 17,
      "title": "Hillside Bungalow in Shimla",
      "image": "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=400",
      "location": "Shimla, Himachal Pradesh",
      "price_per_month": "₹1,50,00,000",
      "listing_type": "For Sale"
    },
    {
      "id": 18,
      "title": "Riverside Villa in Kerala",
      "image": "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=400",
      "location": "Kochi, Kerala",
      "price_per_month": "₹2,75,00,000",
      "listing_type": "For Sale"
    },
    {
      "id": 19,
      "title": "Garden Apartment in Pune",
      "image": "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
      "location": "Pune, Maharashtra",
      "price_per_month": "₹30,00,000",
      "listing_type": "For Sale"
    },
    {
      "id": 20,
      "title": "Historic Mansion in Jaipur",
      "image": "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=400",
      "location": "Jaipur, Rajasthan",
      "price_per_month": "₹2,20,00,000",
      "listing_type": "For Sale"
    }
  ]
  export default propertyData
  