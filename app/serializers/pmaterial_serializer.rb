class PmaterialSerializer < ActiveModel::Serializer
  attributes :id, :unit, :name, :project_id, :material_id, :amount
end
