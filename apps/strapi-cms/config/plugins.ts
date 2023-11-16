export default ({ env }: any) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          params: {
            Bucket: env('AWS_BUCKET'),
          },
        }
      },
    },
});