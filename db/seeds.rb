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

Project.create(name: "Woodshop", description: "Hello, this is an awesome proecs aout creating good space for work. WOWOOWOW wooooood", project_image: open("http://wiki.freesideatlanta.org/images/f/ff/Woodshop1.jpg"))
Project.create(name: "Shelf", description: "This is an awesome shelf, not your average shelf, it makes other shelves look waaaak", project_image: open("http://wiki.freesideatlanta.org/images/f/ff/Woodshop1.jpg"))
Project.create(name: "Table", description: "You put things on this like no other thing. you can read on it, you can lye on it, you can lie to it", project_image: open("http://wiki.freesideatlanta.org/images/f/ff/Woodshop1.jpg"))
Project.create(name: "Robot", description: "Beeep boooop 1101010101010101110 010101010 1001010100101001 10101100100001001010011001", project_image: open("http://wiki.freesideatlanta.org/images/f/ff/Woodshop1.jpg"))
Project.create(name: "Trebuchet", description: "sling giant geese into enemy territory", project_image: open("http://wiki.freesideatlanta.org/images/f/ff/Woodshop1.jpg"))
Project.create(name: "Slingshot", description: "sling giant ants into enemy territory", project_image: open("http://wiki.freesideatlanta.org/images/f/ff/Woodshop1.jpg"))
Project.create(name: "Tanning bed", description: "TURN ORANGE", project_image: open("http://wiki.freesideatlanta.org/images/f/ff/Woodshop1.jpg"))

Step.create(project_id: 1, step: "Well hey, you're here to create something awesome. Lets create it", step_num: 1, step_image: open("http://tic.wpengine.netdna-cdn.com/wp-content/uploads/2009/04/Miter_Saw_9715.jpg"))
Step.create(project_id: 1, step: "We will create a thing that creates other things. Think a makerbot that creates makerbots.", step_num: 2, step_image: open("http://tic.wpengine.netdna-cdn.com/wp-content/uploads/2009/04/Miter_Saw_9715.jpg"))
Step.create(project_id: 1, step: "Y'all gonna need some wood", step_num: 3, step_image: open("http://tic.wpengine.netdna-cdn.com/wp-content/uploads/2009/04/Miter_Saw_9715.jpg"))



Material.create(name: "Hammer", unit: "28oz", perishable: false)
Material.create(name: "Fiberglass Hammer", unit: "16oz", perishable: false)
Material.create(name: "Pine Pressure Treated Plywood", unit: "3/4in. x 4ft. x ?ft", perishable: true)
Material.create(name: "Sanded Pine Plywood", unit: "3/8in. x 4ft. x ?ft", perishable: true)
Material.create(name: "Salt", unit: "Tbsp", perishable: true)
Material.create(name: "Sinker Nails", unit: "1/2in x 2 3/8in", perishable: true)
Material.create(name: "Roofing Nails", unit: "#11 x 1 1/4in", perishable: true)
Material.create(name: "Zinc Common Nails", unit: "1-1/2 in", perishable: true)
Material.create(name: "Electronic Sander", unit: "3in. x 18in.", perishable: false)
Material.create(name: "White Oak", unit: "ft^2", perishable: true)

Pmaterial.create(material_id: 1, project_id: 2, amount: 1)
Pmaterial.create(material_id: 1, project_id: 1, amount: 1)
Pmaterial.create(material_id: 1, project_id: 3, amount: 1)
Pmaterial.create(material_id: 6, project_id: 4, amount: 100)
Pmaterial.create(material_id: 10, project_id: 5, amount: 100)
Pmaterial.create(material_id: 7, project_id: 6, amount: 30)
Pmaterial.create(material_id: 8, project_id: 7, amount: 29)
Pmaterial.create(material_id: 2, project_id: 7, amount: 1)
Pmaterial.create(material_id: 9, project_id: 5, amount: 1)
Pmaterial.create(material_id: 2, project_id: 1, amount: 100)
Pmaterial.create(material_id: 4, project_id: 1, amount: 100)
Pmaterial.create(material_id: 5, project_id: 1, amount: 100)

Umaterial.create(material_id: 1, user_id: 2, amount: 3)
Umaterial.create(material_id: 3, user_id: 1, amount: 2)
Umaterial.create(material_id: 1, user_id: 3, amount: 1)
Umaterial.create(material_id: 3, user_id: 4, amount: 10)
Umaterial.create(material_id: 4, user_id: 5, amount: 10)
Umaterial.create(material_id: 6, user_id: 1, amount: 30)
Umaterial.create(material_id: 4, user_id: 2, amount: 29)
Umaterial.create(material_id: 8, user_id: 2, amount: 1)
Umaterial.create(material_id: 9, user_id: 5, amount: 1)

UserProject.create(user_id: 1, project_id:5)
UserProject.create(user_id: 1, project_id:2)
UserProject.create(user_id: 3, project_id:5)
UserProject.create(user_id: 2, project_id:1)
UserProject.create(user_id: 2, project_id:5)
UserProject.create(user_id: 4, project_id:3)
UserProject.create(user_id: 4, project_id:4)
UserProject.create(user_id: 2, project_id:4)
