User.destroy_all
User.create!(email_address: 'admin@test.com', password: 'password', password_confirmation: 'password')

10.times do
  User.create!(email_address: Faker::Internet.email, password: 'password', password_confirmation: 'password')
end
