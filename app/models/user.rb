class User < ActiveRecord::Base
  has_many :user_projects
  has_many :projects, through: :user_projects
  has_many :umaterials

  validates_presence_of :name
  validates_uniqueness_of :name

  validates_presence_of :email
  validates_uniqueness_of :email

  has_secure_password
end
