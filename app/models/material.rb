class Material < ActiveRecord::Base
  has_many :umaterials
  has_many :pmaterials
  has_many :users, through: :umaterials
  has_many :projects, through: :pmaterials
end
