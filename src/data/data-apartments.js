import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/apartment-images/`;

export const apartments = [
  {
    name: "001",
    maxCapacity: 3,
    regularPrice: 850,
    discount: 50,
    image: imageUrl + "apart-001.jpg",
    description:
      "The apartment 001 consists of a large bright bedroom with a comfy king-sized bed, a modern fully-equipped kitchen and a sunlit living room with Apple TV and free Netflix account. It is the perfect place to stay for couples looking for a romantic location in the historic centre, within walking distance of some of the most beautiful sceneries you can find in the city and all famous landmarks. The sofa in the living room can also serve as an additional bed for a 3rd guest",
  },
  {
    name: "002",
    maxCapacity: 2,
    regularPrice: 450,
    discount: 0,
    image: imageUrl + "apart-002.jpg",
    description:
      "The apartment 002 is suitable for a couples or for a single travelers. It is very cozy and comfortable space, fully designed and furnished by me. Kitchenette includes small fridge, induction stove, microwave and all necessary cutlery to prepare and enjoy your food. The bathroom consists of a shower, sink with a big front mirror and flushable toilet. Liquid soap and shower gel is included.",
  },
  {
    name: "003",
    maxCapacity: 4,
    regularPrice: 400,
    discount: 0,
    image: imageUrl + "apart-003.jpg",
    description:
      "This romantic apartment 003 is perfectly suited for business trip, couple or couple with children. Located in the strong central area includes a cozy studio equiped with nice sofa and queen bed, also there is fully equiped kitchen. Excellent WiFi network. This exclusive apartment is located in an interesting building at the ground floor. With an area of 38 square meters when you come in, you find yourself in a spacious royal studio equipped with nice comfortable sofa bed, royal king size bed, flat screen TV and wardrobe, luxury comfort dinning table for 4 persons and fully equipped kitchen.",
  },
  {
    name: "004",
    maxCapacity: 4,
    regularPrice: 700,
    discount: 150,
    image: imageUrl + "apart-004.jpg",
    description:
      "The apartment 004 has a floor space of 60 square meters and it’s located on the first floor, and in it you will find a spacious living room with a stylish sitting area with smart TV with Netflix included, fully equipped kitchen and a dining. The sofa extends as a bed suitable for two people. The bedroom comes with the most comfortable bed with a choice of pillows and blackout curtains for the perfect night in after a long day. There are separate bathroom with a shower and a toilet that come with all the necessary toiletries.",
  },
  {
    name: "005",
    maxCapacity: 6,
    regularPrice: 950,
    discount: 0,
    image: imageUrl + "apart-005.jpg",
    description:
      "Beautiful two bedroom Old Town apartment 005 with magnificent views with spacious terrace and fully equipped kitchen and two bathrooms. One of the bathroom is ensuite. The Apartment has a beautiful and spacious terrace with views of all major historical sights. The Apartment has free high-speed WIFI, fully equipped kitchen with dishwasher, TV with international channels, air-condition and a new modern interior combined with beautifully preserved old wooden floors. Comfortably sleeps 6 guests.",
  },
  {
    name: "006",
    maxCapacity: 2,
    regularPrice: 300,
    discount: 20,
    image: imageUrl + "apart-006.jpg",
    description:
      "This Old Town apartment 006 with air conditioning and free parking features bedroom with king size bed and Netflix, comfortable living room with smart TV and Netflix, full equipped kitchen with coffee machine and balcony, bathroom with rain shower, bath-tube and unlimited hot water. Neighborhood is surrounded by foodie hot spots and the main sights are in walking distance! I provide you not even the apartment, but also helpful guides which I created for my guests. You will never get lost or hungry.",
  },
  {
    name: "007",
    maxCapacity: 8,
    regularPrice: 1100,
    discount: 200,
    image: imageUrl + "apart-007.jpg",
    description:
      "This modern one bedroom apartment 007 is located in a well-maintained building in the heart of Downtown Cleveland. Great natural light shines through the large windows, giving the unit a bright and airy feel. It has hardwood floors, new appliances, and plenty of built-in storage to maximize space. It also includes a private balcony off the living room for relaxing and enjoying the city views.",
  },
  {
    name: "008",
    maxCapacity: 10,
    regularPrice: 1650,
    discount: 0,
    image: imageUrl + "apart-008.jpg",
    description:
      "Stylishly appointed near the historic Brookside neighborhood, this one bedroom apartment 008 offers modern amenities and an unbeatable location. It has a spacious living area with bright natural lighting, along with a stylish kitchen featuring updated stainless steel appliances and sleek modern cabinets. Beautiful hardwood floors throughout, in-unit washer/dryer hookups, and smart home technology provide a convenient living experience.",
  },
];
