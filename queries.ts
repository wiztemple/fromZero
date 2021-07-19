import gql from "graphql-tag";
import { SCHOOL_FRAGMENT } from "./fragments";

export const GET_LAYOUT_DATA = gql`
  ${SCHOOL_FRAGMENT}
  query getLayoutData {
    config {
      footer {
        id
        description
        copyright
        socialLinks {
          id
          icon
          link
          type
        }
        image {
          id
          url
          formats
        }
        legalLinks {
          id
          title
          link
        }
        supportedBy {
          id
          image {
            id
            url
            formats
          }
          description
        }
      }
    }
    schools {
      ...SCHOOL_FRAGMENT
    }
  }
`;

export const GET_HOME_PAGE_DATA = gql`
  query getHomePageData($schoolId: String) {
    pageHomes(where: { school: { id: $schoolId } }) {
      id
      homeSlidersSection {
        id
        title
        bannerImage {
          id
          name
          url
          mime
        }
        link
      }
      links {
        id
        title
        link
      }
      taglineSection {
        id
        title
        links {
          id
          title
          link
        }
        banner {
          id
          title
          subTitle
          image {
            id
            name
            url
          }
          description
          links {
            id
            title
            link
          }
        }
      }
      introSliderSection {
        id
        title
        Intro {
          id
          title
          image {
            id
            name
            url
          }
          subTitle
          description
          links {
            id
            title
            link
          }
        }
      }
      universitiesSection {
        id
        title
        universities {
          id
          name
          image {
            id
            name
            url
          }
          link
        }
      }
      communitySection {
        id
        title
        description
        links {
          id
          link
          title
        }
        communityTag {
          id
          tag
          communities {
            id
            quote
            quotee
            position
            media {
              id
              name
              url
              mime
            }
          }
        }
      }
      articleSection {
        id
        title
        links {
          id
          link
          title
        }
        articles {
          id
          title
          media {
            id
            name
            url
          }
          description
          tags {
            id
            name
          }
          type
          createdAt
        }
      }
    }
  }
`;

export const CONTACT_US = gql`
  query pageContactuses($schoolId: String) {
    pageContactuses(where: { school: { id: $schoolId } }) {
      id
      created_at
      updated_at
      heading
      school {
        id
        name
      }
      banner_image {
        id
        url
        previewUrl
      }
      main_links {
        id
        link
        title
      }
      contact_admissions {
        id
        email
        phone
        social_links {
          id
          icon
          link
          type
        }
        enquiry {
          id
          title
          link
        }
        vr_tour {
          title
          link
          id
        }
      }
      campuses {
        id
        title
        address
        mapLink
        phone
        fax
        image {
          url
          id
        }
      }
      explore_links {
        id
        title
        link
      }
      SEO {
        id
        title
      }
      SEM {
        id
        title
      }
    }
  }
`;
export const GET_NEWS_AND_MEDIA_PAGE_DATA = gql`
  query getNewsAndMediaPageData($schoolId: ID) {
    pageNewsAndMedias(where: { school: { id: $schoolId } }) {
      id
      Heading
      banner_image {
        url
      }
      media_and_news {
        mediaAndGalleries {
          id
          description
          category
          media {
            url
            mime
          }
          media_type
        }
        galleries {
          id
          description
          media_type
          media {
            url
          }
          category
        }
      }
      news_event_blogs {
        type
        title
        description
        tags {
          id
          name
        }
        media {
          url
        }
        createdAt
      }
      published_at
    }
  }
`;

export const GET_SCHOOL_FOOTER_DATA = gql`
  query getSchoolFooterData($schoolId: ID!) {
    school(id: $schoolId) {
      id
      name
      fax
      phone
      location
      logo {
        id
        url
      }
      footer {
        id
        title
        logo {
          id
          url
        }
        socialLinks {
          id
          icon
          link
          type
        }
        sections {
          id
          title
          links {
            id
            title
            link
          }
        }
      }
    }
  }
`;

export const JOIN_US = gql`
  query pageJoinuses($schoolId: String) {
    pageJoinuses(where: { school: { id: $schoolId } }) {
      id
      created_at
      updated_at
      header
      bannerImage {
        id
        url
      }
      bannerlinks {
        id
        title
        link
      }
      description
      info {
        id
        body
        buttons {
          id
          title
          link
          type
        }
        image {
          id
          url
          caption
        }
      }
      exploreNext {
        id
        title
        link
      }
      school {
        id
        name
      }
    }
  }
`;

export const GET_CAMPUS_BOARDING_LIFE_DATA = gql`
  query getCampusBoardingLivesData($schoolId: ID) {
    pageCampusLives(where: { school: { id: $schoolId } }) {
      id
    created_at
    updated_at
    boardingLife {
      heading
      banner_image {
        id
        caption
        url
      }
      bannerLinks {
        id
        link
        title
      }
      description
      previewVideo
      whyBoarding {
          id
          title
          description
        }
      boardingTabs {
        id
        titleTab
        sections {
          id
          title
          description
          image {
            id
            url
            caption
          }
          button {
            id
            title
            link
          }
        }
      }
      gallery {
        id
          title
          image {
            id
            url
          }
      }
      explore_next {
        id
        title
        link
      }
    }
    locale
    }
  }
`;