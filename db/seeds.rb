100.times do 
  Item.create(
    name: Faker::Food.dish,
    description: Faker::Food.description,
    price: Faker::Commerse.price 
  )
  end