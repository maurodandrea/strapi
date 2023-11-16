export default ({ env }: any) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          params: {
            Bucket: env('AWS_BUCKET'),
          },
        }
      },
    },
});