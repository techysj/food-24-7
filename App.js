import React from "react";
import ReactDOM from "react-dom/client";

const restroList = [
  {
    info: {
      id: "90872",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "North Eye",
      areaName: "Sector 74",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "90872",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5800,
      },
      parentId: "166",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 03:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "EVERY ITEM",
        subHeader: "@ ₹129",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-north-eye-sector-74-noida-1-90872",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "396440",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Amrapali Platinum Shopping Arcade",
      areaName: "Sector 72",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "396440",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 6800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 6800,
      },
      parentId: "721",
      avgRatingString: "3.8",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 5.7,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "5.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-amrapali-platinum-shopping-arcade-sector-72-noida-1-396440",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "356221",
      name: "KFC",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      locality: "Hazipur",
      areaName: "Hajipur",
      costForTwo: "₹450 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "356221",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4900,
      },
      parentId: "547",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-hazipur-hajipur-noida-1-356221",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "391409",
      name: "Burger Singh (Big Punjabi Burgers)",
      cloudinaryImageId: "reevvyksx0o9h9o1mmrl",
      locality: "Parthala Road",
      areaName: "Sector 122",
      costForTwo: "₹300 for two",
      cuisines: ["Snacks", "Indian", "American", "Beverages", "Desserts"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "391409",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 6800,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 6800,
      },
      parentId: "375065",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-singh-big-punjabi-burgers-parthala-road-sector-122-noida-1-391409",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "68184",
      name: "Rollsking",
      cloudinaryImageId: "wzk5zpirbiyv8qh932og",
      locality: "Rohillapur",
      areaName: "Sector 132",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Fast Food", "Beverages"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "68184",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 6800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 6800,
      },
      parentId: "4697",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 5.5,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "5.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 04:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/rollsking-rohillapur-sector-132-noida-1-68184",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "76663",
      name: "Subway",
      cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
      locality: "Ach Market",
      areaName: "Sector 72",
      costForTwo: "₹350 for two",
      cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: "76663",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5000,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5000,
      },
      parentId: "2",
      avgRatingString: "3.7",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 07:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-ach-market-sector-72-noida-1-76663",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "408871",
      name: "Nayi Dilli Ke Paranthe",
      cloudinaryImageId: "zk259u3lq1nokmy2fego",
      locality: "Hanuman Marg",
      areaName: "Sector 73",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Indian", "Tandoor"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "408871",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 6800,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 6800,
      },
      parentId: "10616",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/nayi-dilli-ke-paranthe-hanuman-marg-sector-73-noida-1-408871",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "404309",
      name: "Yours Truly Butter Chicken",
      cloudinaryImageId: "oyfbizgcygqu2ahcracf",
      locality: "Hanuman Marg",
      areaName: "Sector 73",
      costForTwo: "₹500 for two",
      cuisines: ["North Indian", "Indian", "Kebabs", "Biryani"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "404309",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 7500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7500,
      },
      parentId: "10615",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/yours-truly-butter-chicken-hanuman-marg-sector-73-noida-1-404309",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "405217",
      name: "Call Chotu - Your Everyday Food Genie",
      cloudinaryImageId: "fw8lo5clwgoywor5xvsv",
      locality: "Hanuman Marg",
      areaName: "Sector 73",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "American",
        "Mughlai",
        "Biryani",
        "Street Food",
        "Pastas",
        "Fast Food",
      ],
      avgRating: 4,
      feeDetails: {
        restaurantId: "405217",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 6800,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 6800,
      },
      parentId: "10614",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/call-chotu-your-everyday-food-genie-hanuman-marg-sector-73-noida-1-405217",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "183883",
      name: "Khadak Singh Da Dhaba",
      cloudinaryImageId: "8144bf37947c161953f656308d1bfc30",
      locality: "Hazipur",
      areaName: "Hajipur",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Chinese", "Mughlai", "Snacks"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "183883",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4700,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4700,
      },
      parentId: "13170",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/khadak-singh-da-dhaba-hazipur-hajipur-noida-1-183883",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "324384",
      name: "Tossin Pizza",
      cloudinaryImageId: "313485a665bd0f4958fdc14ead8afade",
      locality: "Sector 50",
      areaName: "Sector 50",
      costForTwo: "₹600 for two",
      cuisines: ["Italian"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "324384",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 7500,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7500,
      },
      parentId: "1778",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 5.7,
        serviceability: "SERVICEABLE",
        slaString: "25-35 mins",
        lastMileTravelString: "5.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 06:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/tossin-pizza-sector-50-noida-1-324384",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "387946",
      name: "Burgerama",
      cloudinaryImageId: "1d52387b37dbec1712d0142aec3421a6",
      locality: "B Block",
      areaName: "Sector 4",
      costForTwo: "₹600 for two",
      cuisines: ["American"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "387946",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 13000,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 13000,
      },
      parentId: "8993",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 10.7,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "10.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burgerama-b-block-sector-4-noida-1-387946",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "77236",
      name: "Wakhra Swaad",
      cloudinaryImageId: "06614d33a0adb57e8baf7c0f736937da",
      locality: "Sector 104",
      areaName: "Sector 104",
      costForTwo: "₹500 for two",
      cuisines: ["North Indian", "Mughlai"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "77236",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5700,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5700,
      },
      parentId: "6455",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 01:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/wakhra-swaad-sector-104-noida-1-77236",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "31178",
      name: "Cold Rock Cafe",
      cloudinaryImageId: "zvcnxmdmprylf0daot0o",
      locality: "Ach Market",
      areaName: "Sector 72",
      costForTwo: "₹250 for two",
      cuisines: ["Italian", "Snacks", "Chinese", "Ice Cream", "Desserts"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "31178",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 5000,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5000,
      },
      parentId: "7131",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/cold-rock-cafe-ach-market-sector-72-noida-1-31178",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "111666",
      name: "Burgrill - The Win Win Burger",
      cloudinaryImageId: "lhyfy3c5brp3hnjpjwzi",
      locality: "Golf Course",
      areaName: "Sector 45",
      costForTwo: "₹250 for two",
      cuisines: [
        "Burgers",
        "Healthy Food",
        "American",
        "Salads",
        "Beverages",
        "Desserts",
        "Snacks",
      ],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "111666",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 6800,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 6800,
      },
      parentId: "302366",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 04:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burgrill-the-win-win-burger-golf-course-sector-45-noida-1-111666",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "203621",
      name: "Faasos - Wraps & Rolls",
      cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
      locality: "B Block",
      areaName: "Sector 83",
      costForTwo: "₹500 for two",
      cuisines: [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "North Indian",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "203621",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5000,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5000,
      },
      parentId: "21809",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 03:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-b-block-sector-83-noida-1-203621",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "68058",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId: "8cb220fa3997a3b928d2ffb6c098acaf",
      locality: "Central Market",
      areaName: "Sector 50",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream"],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: "68058",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 6800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 6800,
      },
      parentId: "2233",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 5.7,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "5.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-central-market-sector-50-noida-1-68058",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "69469",
      name: "Pasta la Vista",
      cloudinaryImageId: "tsp9bfkxkaljpcwyrmsr",
      locality: "D Block",
      areaName: "Sector 7",
      costForTwo: "₹300 for two",
      cuisines: ["Continental", "Italian"],
      avgRating: 4,
      veg: true,
      feeDetails: {
        restaurantId: "69469",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 13800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 13800,
      },
      parentId: "2372",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 11.5,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "11.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pasta-la-vista-d-block-sector-7-noida-1-69469",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "177495",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "ugemttaiukyqfhxkfs9i",
      locality: "Pathways School Road",
      areaName: "Hajipur",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "177495",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5000,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5000,
      },
      parentId: "4961",
      avgRatingString: "3.8",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-pathways-school-road-hajipur-noida-1-177495",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "555538",
      name: "Nirula's",
      cloudinaryImageId: "pkfsepfc5a9vmnek95sk",
      locality: "Sector 45",
      areaName: "Sadarpur",
      costForTwo: "₹500 for two",
      cuisines: [
        "Pizzas",
        "Burgers",
        "Ice Cream",
        "North Indian",
        "Fast Food",
        "Asian",
        "Pastas",
        "Desserts",
        "Beverages",
        "Snacks",
      ],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "555538",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 6500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 6500,
      },
      parentId: "1738",
      avgRatingString: "4.1",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-08 04:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/nirulas-sector-45-sadarpur-noida-1-555538",
      type: "WEBLINK",
    },
  },
];

const restroObj = {
  info: {
    id: "396440",
    name: "Pizza Hut",
    cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
    locality: "Amrapali Platinum Shopping Arcade",
    areaName: "Sector 72",
    costForTwo: "₹300 for two",
    cuisines: ["Pizzas"],
    avgRating: 3.8,
    feeDetails: {
      restaurantId: "396440",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 6800,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 6800,
    },
    parentId: "721",
    avgRatingString: "3.8",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 28,
      lastMileTravel: 5.7,
      serviceability: "SERVICEABLE",
      slaString: "28 mins",
      lastMileTravelString: "5.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-10-08 03:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
};

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf="
        alt="logo"
      />
    </div>
    <div className="menu-container">
      <ul className="navLinks-container">
        <li className="nav-link">Home</li>
        <li className="nav-link">Contact Us</li>
        <li className="nav-link">About Us</li>
        <li className="nav-link">Cart</li>
      </ul>
    </div>
  </div>
);

const RestroContainer = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info; //this is called optional chaining --
  //  we dont need to  do resdata.info.name, resdata.info .cuisines to access the data
  return (
    <a href={resData.cta.link} className="restroCard">
      <div className="restroCard-container">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
        <p className="restroInfo restroName">{name}</p>
        <p className="restroInfo cuisineName">{cuisines.join(", ")}</p>
        <p className="restroInfo restroRating">{avgRating}/5</p>
      </div>
    </a>
  );
};

const Body = () => (
  <div className="body">
    <div className="cards-container">
      {restroList.map((restaurent) => (
        <RestroContainer key={restaurent.info.id} resData={restaurent} />
      ))}
    </div>
  </div>
);

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(<AppLayout />);
