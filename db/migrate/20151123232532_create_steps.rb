class CreateSteps < ActiveRecord::Migration
  def change
    create_table :steps do |t|
      t.integer :project_id
      t.text :step
      t.integer :step_num
      t.timestamps null: false
    end
  end
end
