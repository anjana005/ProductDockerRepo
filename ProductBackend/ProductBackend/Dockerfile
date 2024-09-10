# Use .NET SDK to build and publish the project
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src

COPY ProductBackend/ProductBackend/ProductBackend.csproj ./
RUN dotnet restore

COPY . .

RUN dotnet clean

RUN dotnet publish -c Release -r linux-x64 -o /app

# Use ASP.NET runtime image for final stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0

WORKDIR /app

COPY --from=build /app .

EXPOSE 80

ENTRYPOINT ["dotnet", "ProductBackend.dll"]
