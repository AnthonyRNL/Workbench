class CreateUmaterials < ActiveRecord::Migration
  def change
    create_table :umaterials do |t|
      t.string :name
      t.integer :amount
      t.string :unit
      t.integer :user_id
      t.timestamps null: false
    end
  end
end
