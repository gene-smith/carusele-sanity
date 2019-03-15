import campaignID from "./campaignID";

export default {
  name: "campaign",
  title: "Campaign",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      required: true
    },
    {
      name: "campaignID",
      title: "Campaign ID",
      type: "array",
      required: true,
      of: [
        {
          type: "reference",
          to: {
            type: "campaignID"
          }
        }
      ]
    },
    {
      name: "link",
      title: "Link",
      type: "url"
    },
    {
      name: "contentType",
      title: "Content Type",
      type: "array",
      required: true,
      of: [
        {
          type: "reference",
          to: {
            type: "contentType"
          }
        }
      ]
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      required: true,
      options: {
        hotspot: true
      }
    }
  ],

  preview: {
    select: {
      title: "title",
      campaign: "campaignID.0.name",
      media: "mainImage"
    },
    prepare(selection) {
      const { title, campaign, media } = selection;
      return Object.assign({}, selection, {
        title: title,
        subtitle: campaign,
        media: media
      });
    }
  }
};
