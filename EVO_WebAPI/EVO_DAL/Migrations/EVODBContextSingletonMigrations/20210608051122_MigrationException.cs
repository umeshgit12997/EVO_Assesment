using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace EVO_DAL.Migrations.EVODBContextSingletonMigrations
{
    public partial class MigrationException : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "exceptiontracking",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    ExceptionMethod = table.Column<string>(type: "varchar(60)", nullable: false),
                    ExceptionMessage = table.Column<string>(type: "text", nullable: false),
                    ExceptionSource = table.Column<string>(type: "text", nullable: false),
                    ExceptionStackTrace = table.Column<string>(type: "text", nullable: false),
                    TargetSiteName = table.Column<string>(type: "text", nullable: false),
                    CreatedBy = table.Column<int>(type: "int", nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "timestamp", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_exceptiontracking", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "exceptiontracking");
        }
    }
}
