class Pmaterial < ActiveRecord::Base
  attr_accessor :name, :unit, :perishable
  belongs_to :project
  belongs_to :material
end
