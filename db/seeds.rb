# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create(name: "Anthony", email: "anthony@com.com", password: "asdf", password_confirmation: "asdf")
User.create(name: "Aaron", email: "aaron@com.com", password: "asdf", password_confirmation: "asdf")
User.create(name: "Byron", email: "byron@com.com", password: "asdf", password_confirmation: "asdf")
User.create(name: "Moron", email: "moron@com.com", password: "asdf", password_confirmation: "asdf")
User.create(name: "Door", email: "door@com.com", password: "asdf", password_confirmation: "asdf")

Project.create(name: "Woodshop", description: "Hello, this is an awesome proecs aout creating good space for work. WOWOOWOW wooooood")
Project.create(name: "Shelf", description: "This is an awesome shelf, not your average shelf, it makes other shelves look waaaak")
Project.create(name: "Table", description: "You put things on this like no other thing. you can read on it, you can lye on it, you can lie to it")
Project.create(name: "Robot", description: "Beeep boooop 1101010101010101110 010101010 1001010100101001 10101100100001001010011001")
Project.create(name: "Trebuchet", description: "sling giant geese into enemy territory")
Project.create(name: "Slingshot", description: "sling giant ants into enemy territory")
Project.create(name: "Tanning bed", description: "TURN ORANGE")

Pmaterial.create(name: "Hammer", project_id: "2", unit: "general", amount: 1)
Pmaterial.create(name: "Hammer", project_id: "1", unit: "general", amount: 1)
Pmaterial.create(name: "Hammer", project_id: "3", unit: "general", amount: 1)
Pmaterial.create(name: "100 ohm resistors", project_id: "4", unit: "general", amount: 100)
Pmaterial.create(name: "White Oak", project_id: "5", unit: "ft squared", amount: 100)
Pmaterial.create(name: "nails", project_id: "6", unit: "general", amount: 30)
Pmaterial.create(name: "rubberband", project_id: "7", unit: "general", amount: 29)
Pmaterial.create(name: "UV lights", project_id: "7", unit: "general", amount: 1)
Pmaterial.create(name: "Miter Saw", project_id: "5", unit: "general", amount: 1)
Pmaterial.create(name: "Green Oak", project_id: "1", unit: "ft squared", amount: 100)
Pmaterial.create(name: "Blue Oak", project_id: "1", unit: "ft squared", amount: 100)
Pmaterial.create(name: "Yellow Oak", project_id: "1", unit: "ft squared", amount: 100)

Umaterial.create(name: "Hammer", user_id: "2", unit: "general", amount: 1)
Umaterial.create(name: "Hammer", user_id: "1", unit: "general", amount: 1)
Umaterial.create(name: "Hammer", user_id: "3", unit: "general", amount: 1)
Umaterial.create(name: "100 ohm resistors", user_id: "4", unit: "general", amount: 100)
Umaterial.create(name: "White Oak", user_id: "5", unit: "ft squared", amount: 100)
Umaterial.create(name: "nails", user_id: "1", unit: "general", amount: 30)
Umaterial.create(name: "rubberband", user_id: "2", unit: "general", amount: 29)
Umaterial.create(name: "UV lights", user_id: "2", unit: "general", amount: 1)
Umaterial.create(name: "Miter Saw", user_id: "5", unit: "general", amount: 1)

UserProject.create(user_id: 1, project_id:5)
UserProject.create(user_id: 1, project_id:2)
UserProject.create(user_id: 3, project_id:5)
UserProject.create(user_id: 2, project_id:4)
