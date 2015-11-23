class CreateUmaterials < ActiveRecord::Migration
  def change
    create_table :umaterials do |t|
      t.integer :amount
      t.integer :material_id
      t.integer :user_id
      t.timestamps null: false
    end
  end
end
