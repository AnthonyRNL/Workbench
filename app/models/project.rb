class Project < ActiveRecord::Base
  has_many :user_projects
  has_many :users, through: :user_projects
  has_many :pmaterials
end
