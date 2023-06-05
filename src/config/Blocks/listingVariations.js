import SimpleCardTemplate from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/SimpleCard/SimpleCardTemplate';

import CardWithImageTemplate from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/CardWithImageTemplate';
import CardWithImageTemplateSkeleton from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/CardWithImageTemplateSkeleton';

import InEvidenceTemplate from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/InEvidenceTemplate';
import InEvidenceTemplateSkeleton from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/InEvidenceTemplateSkeleton';

import ContentInEvidenceTemplate from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/ContentInEvidenceTemplate';
import ContentInEvidenceTemplateSkeleton from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/ContentInEvidenceTemplateSkeleton';

import RibbonCardTemplate from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/RibbonCardTemplate';
import RibbonCardTemplateSkeleton from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/RibbonCardTemplateSkeleton';

import MapTemplate from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/MapTemplate';
import MapTemplateSkeleton from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/MapTemplateSkeleton';

import SmallBlockLinksTemplate from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/SmallBlockLinksTemplate';
import SmallBlockLinksTemplateSkeleton from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/SmallBlockLinksTemplateSkeleton';

import CompleteBlockLinksTemplate from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/CompleteBlockLinksTemplate';
import CompleteBlockLinksTemplateSkeleton from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/CompleteBlockLinksTemplateSkeleton';

import PhotogalleryTemplate from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/PhotogalleryTemplate';
import PhotogalleryTemplateSkeleton from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/PhotogalleryTemplateSkeleton';

import SliderTemplate from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/SliderTemplate';
import SliderTemplateSkeleton from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/SliderTemplateSkeleton';

import GridGalleryTemplate from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/GridGalleryTemplate';
import GridGalleryTemplateSkeleton from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/GridGalleryTemplateSkeleton';

import BandiInEvidenceTemplate from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/BandiInEvidenceTemplate';
import BandiInEvidenceTemplateSkeleton from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/BandiInEvidenceTemplateSkeleton';

import SquaresImageTemplate from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/SquaresImageTemplate';
import SquaresImageTemplateSkeleton from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/SquaresImageTemplateSkeleton';

import SimpleListTemplate from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/SimpleListTemplate';
import SimpleListTemplateSkeleton from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/SimpleListTemplateSkeleton';

import CardWithSlideUpTextTemplate from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/CardWithSlideUpTextTemplate';
import CardWithSlideUpTextTemplateSkeleton from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/CardWithSlideUpTextTemplateSkeleton';

// import AmministrazioneTrasparenteTablesTemplate from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/AmministrazioneTrasparenteTablesTemplate';
// import AmministrazioneTrasparenteTablesTemplateSkeleton from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/TemplatesSkeletons/AmministrazioneTrasparenteTablesTemplateSkeleton';

import {
  addSimpleCardTemplateOptions,
  addCardWithImageTemplateOptions,
  addInEvidenceTemplateOptions,
  addRibbonCardTemplateOptions,
  addMapTemplateOptions,
  addCompleteBlockLinksTemplateOptions,
  addBandiInEvidenceTemplateOptions,
  addDefaultOptions,
  addSliderTemplateOptions,
  addSimpleListTemplateOptions,
  addCardWithSlideUpTextTemplateOptions,
  addPhotogalleryTemplateOptions,
} from 'design-comuni-plone-theme/config/Blocks/ListingOptions';

import { addLighthouseField, cloneBlock } from 'design-comuni-plone-theme/config/Blocks/ListingOptions/utils';
import { defineMessages } from 'react-intl';

const messages = defineMessages({
  simple_card: {
    id: 'Card semplice',
    defaultMessage: 'Card semplice',
  },
  card_with_image_template: {
    id: 'Card con immagine',
    defaultMessage: 'Card con immagine',
  },
  in_evidence_template: {
    id: 'In evidenza',
    defaultMessage: 'In evidenza',
  },
  content_in_evidence_template: {
    id: 'Contenuto in evidenza',
    defaultMessage: 'Contenuto in evidenza',
  },
  ribbon_card_template: {
    id: 'Card con nastro',
    defaultMessage: 'Card con nastro',
  },
  card_slide_up_text_template: {
    id: 'Card con testo animato',
    defaultMessage: 'Card con testo animato',
  },
  quares_image_template: {
    id: 'Quadratoni con immagine',
    defaultMessage: 'Quadratoni con immagine',
  },
  map_template: {
    id: 'Mappa',
    defaultMessage: 'Mappa',
  },
  small_block_links_template: {
    id: 'Blocco link solo immagini',
    defaultMessage: 'Blocco link solo immagini',
  },
  complete_block_links_template: {
    id: 'Blocco link completo',
    defaultMessage: 'Blocco link completo',
  },
  photogallery: {
    id: 'Photogallery',
    defaultMessage: 'Photogallery',
  },
  slider: {
    id: 'Slider',
    defaultMessage: 'Slider',
  },
  grid_gallery_template: {
    id: 'Gallery a griglia',
    defaultMessage: 'Gallery a griglia',
  },
  bandi_in_evidence_template: {
    id: 'Bandi',
    defaultMessage: 'Bandi',
  },
  simple_list_template: {
    id: 'Lista semplice',
    defaultMessage: 'Lista semplice',
  },
  // amministrazione_trasparente_tables_template: {
  //   id: 'Tabelle Amministrazione Trasparente',
  //   defaultMessage: 'Tabelle Amministrazione Trasparente',
  // },
  // template_label: {
  //   id: 'Template label',
  //   defaultMessage: 'Template label',
  // },
});

const italiaListingVariations = [
  {
    id: 'simpleCard',
    isDefault: true,
    title: intl.formatMessage(messages.simple_card),
    template: SimpleCardTemplate,
    schemaEnhancer: ({ schema, formData, intl }) => {
      addSimpleCardTemplateOptions(schema, formData, intl);
      return schema;
    },
    cloneData: cloneBlock,
  },
  {
    id: 'cardWithImageTemplate',
    isDefault: false,
    title: intl.formatMessage(messages.card_with_image_template),
    template: CardWithImageTemplate,
    skeleton: CardWithImageTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      addCardWithImageTemplateOptions(schema, formData, intl);
      return schema;
    },
    cloneData: cloneBlock,
  },
  {
    id: 'inEvidenceTemplate',
    isDefault: false,
    title: intl.formatMessage(messages.in_evidence_template),
    template: InEvidenceTemplate,
    skeleton: InEvidenceTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      addInEvidenceTemplateOptions(schema, formData, intl);
      return schema;
    },
    cloneData: cloneBlock,
  },
  {
    id: 'contentInEvidenceTemplate',
    isDefault: false,
    title: intl.formatMessage(messages.content_in_evidence_template),
    template: ContentInEvidenceTemplate,
    skeleton: ContentInEvidenceTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      let pos = addLighthouseField(schema, intl);
      addDefaultOptions(schema, formData, intl, pos);
      return schema;
    },
    cloneData: cloneBlock,
  },
  {
    id: 'ribbonCardTemplate',
    isDefault: false,
    title: intl.formatMessage(messages.ribbon_card_template),
    template: RibbonCardTemplate,
    skeleton: RibbonCardTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      addRibbonCardTemplateOptions(schema, formData, intl);
      return schema;
    },
    cloneData: cloneBlock,
  },
  {
    id: 'cardSlideUpTextTemplate',
    isDefault: false,
    title: intl.formatMessage(messages.card_slide_up_text_template),
    template: CardWithSlideUpTextTemplate,
    skeleton: CardWithSlideUpTextTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      addCardWithSlideUpTextTemplateOptions(schema, formData, intl);
      return schema;
    },
    cloneData: cloneBlock,
  },
  {
    id: 'quaresImageTemplate',
    isDefault: false,
    title: intl.formatMessage(messages.quares_image_template),
    template: SquaresImageTemplate,
    skeleton: SquaresImageTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      let pos = addLighthouseField(schema, intl);
      addDefaultOptions(schema, formData, intl, pos);
      return schema;
    },
    cloneData: cloneBlock,
  },
  {
    id: 'mapTemplate',
    isDefault: false,
    title: intl.formatMessage(messages.map_template),
    template: MapTemplate,
    skeleton: MapTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      let pos = addDefaultOptions(schema, formData, intl);
      addMapTemplateOptions(schema, formData, intl, pos);
      return schema;
    },
    cloneData: cloneBlock,
  },
  {
    id: 'smallBlockLinksTemplate',
    isDefault: false,
    title: intl.formatMessage(messages.small_block_links_template),
    template: SmallBlockLinksTemplate,
    skeleton: SmallBlockLinksTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      /*let pos = */ addDefaultOptions(schema, formData, intl);
      return schema;
    },
    cloneData: cloneBlock,
  },
  {
    id: 'completeBlockLinksTemplate',
    isDefault: false,
    title: intl.formatMessage(messages.complete_block_links_template),
    template: CompleteBlockLinksTemplate,
    skeleton: CompleteBlockLinksTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      addCompleteBlockLinksTemplateOptions(schema, formData, intl);
      return schema;
    },
    cloneData: cloneBlock,
  },
  {
    id: 'photogallery',
    isDefault: false,
    title: intl.formatMessage(messages.photogallery),
    template: PhotogalleryTemplate,
    skeleton: PhotogalleryTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      let pos = addDefaultOptions(schema, formData, intl);
      addPhotogalleryTemplateOptions(schema, formData, intl, pos);
      return schema;
    },
    cloneData: cloneBlock,
  },
  {
    id: 'slider',
    isDefault: false,
    title: intl.formatMessage(messages.slider),
    template: SliderTemplate,
    skeleton: SliderTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      let pos = addDefaultOptions(schema, formData, intl);
      addSliderTemplateOptions(schema, formData, intl, pos);
      return schema;
    },
    cloneData: cloneBlock,
  },
  {
    id: 'gridGalleryTemplate',
    isDefault: false,
    title: intl.formatMessage(messages.grid_gallery_template),
    template: GridGalleryTemplate,
    skeleton: GridGalleryTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      /*let pos = */ addDefaultOptions(schema, formData, intl);
      return schema;
    },
    cloneData: cloneBlock,
  },
  {
    id: 'bandiInEvidenceTemplate',
    isDefault: false,
    title: intl.formatMessage(messages.bandi_in_evidence_template),
    template: BandiInEvidenceTemplate,
    skeleton: BandiInEvidenceTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      let pos = addDefaultOptions(schema, formData, intl);
      addBandiInEvidenceTemplateOptions(schema, formData, intl, pos);
      return schema;
    },
    cloneData: cloneBlock,
  },
  {
    id: 'simpleListTemplate',
    isDefault: false,
    title: intl.formatMessage(messages.simple_list_template),
    template: SimpleListTemplate,
    skeleton: SimpleListTemplateSkeleton,
    schemaEnhancer: ({ schema, formData, intl }) => {
      let pos = addDefaultOptions(schema, formData, intl);
      addSimpleListTemplateOptions(schema, formData, intl, pos);
      return schema;
    },
    cloneData: cloneBlock,
  },
  //  {
  //    id: 'amministrazioneTrasparenteTablesTemplate',
  //    isDefault: false,
  //    title: intl.formatMessage(messages.amministrazione_trasparente_tables_template),
  //    fullobjects: 1,
  //    template: AmministrazioneTrasparenteTablesTemplate,
  //    skeleton: AmministrazioneTrasparenteTablesTemplateSkeleton,
  //    schemaEnhancer: ({ schema, formData, intl }) => {
  //      /*let pos = */ addDefaultOptions(schema, formData, intl);
  //      return schema;
  //    },
  // },

  // ****** Example: ******
  // { id:template_id,
  //   isDefault: false,
  //   title: intl.formatMessage(messages.template_label),
  //   template: TemplateComponent,
  //   skeleton: TemplateSkeletonComponent,
  //   schemaEnhancer: ({ schema, formData, intl }) => {
  //        let pos = addDefaultOptions(schema, formData, intl);
  //        return schema;
  //    },
  // },
];

export const getItaliaListingVariations = (config) => {
  return italiaListingVariations.map((variation) => ({
    ...variation,
    schemaEnhancer: ({ schema, formData, intl }) => {
      const newSchema = variation.schemaEnhancer({ schema, formData, intl });
      const defaultFieldsetIndex = newSchema.fieldsets.findIndex(
        (fieldset) => fieldset.id === 'default',
      );
      if (defaultFieldsetIndex > -1) {
        const defaultFieldset = newSchema.fieldsets[defaultFieldsetIndex];
        defaultFieldset.fields = defaultFieldset.fields.filter(
          (field) => field !== 'headline' && field !== 'headlineTag',
        );
      }

      return newSchema;
    },
  }));
};
export const removeListingVariation = (config, id) => {
  let indexOfVariation = -1;
  indexOfVariation =
    config.blocks?.blocksConfig?.listing?.variations?.findIndex(
      (x) => x.id === id,
    );
  if (indexOfVariation >= 0) {
    config.blocks.blocksConfig.listing.variations.splice(indexOfVariation, 1);
  }
};
