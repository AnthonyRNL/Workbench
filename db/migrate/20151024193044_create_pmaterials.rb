class CreatePmaterials < ActiveRecord::Migration
  def change
    create_table :pmaterials do |t|
      t.string :name
      t.integer :amount
      t.string :unit
      t.integer :project_id
      t.timestamps null: false
    end
  end
end
