module ApplicationHelper
  def webpack_javascript_tag(bundle)
    src =
      if Rails.configuration.respond_to?('webpack_manifest')
        filename = Rails.configuration.webpack_manifest[bundle]
        "#{compute_asset_host}/assets/#{filename}"
      else
        "#{compute_asset_host}/assets/#{bundle}"
      end

    javascript_include_tag(src)
  end

  def webpack_stylesheet_tag(bundle)
    if Rails.configuration.respond_to?('webpack_manifest')
      filename = Rails.configuration.webpack_manifest[bundle]
      src = "#{compute_asset_host}/assets/#{filename}"
      stylesheet_link_tag(src)
    else
      nil
    end
  end
end
