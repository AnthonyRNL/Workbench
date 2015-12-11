class Project < ActiveRecord::Base
  has_many :user_projects
  has_many :steps
  has_many :users, through: :user_projects
  has_many :pmaterials
  has_many :materials, through: :pmaterials
  mount_base64_uploader :project_image, ProjectImageUploader
end
