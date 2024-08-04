namespace API_RedMango.Services.IServices
{
    public interface IFileUpload
    {
        Task<string> UploadFile(IFormFile file);
        bool DeleteFile(string filePath);
    }
}
