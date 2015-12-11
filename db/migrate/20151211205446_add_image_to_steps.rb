class AddImageToSteps < ActiveRecord::Migration
  def change
    add_column :steps, :step_image, :string
  end
end
