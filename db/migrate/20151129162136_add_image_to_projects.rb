class AddImageToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :project_image, :string
  end
end
