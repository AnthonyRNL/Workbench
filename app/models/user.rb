class User < ActiveRecord::Base
  attr_accessor :avatar
  mount_uploader :avatar, AvatarUploader
  has_many :user_projects
  has_many :projects, through: :user_projects
  has_many :umaterials
  has_many :materials, through: :umaterials

  validates_presence_of :name
  validates_uniqueness_of :name

  validates_presence_of :email
  validates_uniqueness_of :email

  has_secure_password
end
