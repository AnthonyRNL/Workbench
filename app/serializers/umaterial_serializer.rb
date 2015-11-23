class UmaterialSerializer < ActiveModel::Serializer
  attributes :id, :unit, :name, :material_id, :user_id, :amount
end
