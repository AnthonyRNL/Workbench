class CreatePmaterials < ActiveRecord::Migration
  def change
    create_table :pmaterials do |t|
      t.integer :amount
      t.integer :project_id
      t.integer :material_id
      t.timestamps null: false
    end
  end
end
